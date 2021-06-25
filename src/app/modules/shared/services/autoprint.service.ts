import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

import {
  AutoprintAddPrinterGQL,
  AutoprintDownloadAcknowledgeForPrinterGQL,
  AutoprintEnrollWorkstationGQL,
  AutoprintGetNextForPrinterGQL,
  AutoprintListPrintersGQL,
  AutoprintPrintAcknowledgeForPrinterGQL,
  AutoprintTestWorkstationGQL,
  PrinterEntity,
  PrintJob,
  WorkstationEntity
} from '../../../../generated/graphql';
import { UserService } from './user.service';

const { CapacitorMachineId } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AutoprintService {
  private machineId: string = null;
  private machineName: string = null;

  private timer: number = null;

  private workstation: WorkstationEntity;
  private userChangedSubscription: Subscription;

  private printers: PrinterEntity[] = null;
  private printerIndex = 0;

  constructor(
    private autoprintTestWorkstationGQL: AutoprintTestWorkstationGQL,
    private autoprintEnrollWorkstationGQL: AutoprintEnrollWorkstationGQL,
    private autoprintListPrintersGQL: AutoprintListPrintersGQL,
    private autoprintAddPrinterGQL: AutoprintAddPrinterGQL,
    private autoprintGetNextForPrinterGQL: AutoprintGetNextForPrinterGQL,
    private autoprintDownloadAcknowledgeForPrinterGQL: AutoprintDownloadAcknowledgeForPrinterGQL,
    private autoprintPrintAcknowledgeForPrinterGQL: AutoprintPrintAcknowledgeForPrinterGQL,
    private httpClient: HttpClient,
    private platform: Platform,
    private userService: UserService
  ) {
    if (platform.is('electron')) {
      CapacitorMachineId.getId(false).then((id) => {
        this.machineId = id;
        CapacitorMachineId.getName().then((name) => {
          this.machineName = name;

          this.userChangedSubscription = this.userService.userChanged$.subscribe(
            (user) => {
              if (user) {
                this.version().subscribe((version) => {
                  this.testWorkstation();
                });
              }
            },
            (error) => {
              console.log(error);
            }
          );
        });
      });
    }
  }

  testWorkstation() {
    this.autoprintTestWorkstationGQL
      .mutate({ machineKey: this.machineId })
      .pipe(map((result) => result.data.autoprintTestWorkstation))
      .subscribe(
        (result) => {
          this.workstation = result;
          this.timerCallback(1000);
        },
        (error) => {
          console.log(error);
          this.workstation = null;
          clearTimeout(this.timer);
        }
      );
  }

  timerCallback(duration: number) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.printers) {
        this.listEnabledPrinters().subscribe(
          (printers) => {
            this.printers = printers;
            this.timerCallback(1000);
          },
          (error) => {
            // Probably the daemon is not running
            this.timerCallback(30000);
          }
        );
      } else if (this.printers) {
        this.printerIndex++;
        if (this.printerIndex >= this.printers.length) {
          this.printerIndex = 0;
        }

        const printerName = this.printers[this.printerIndex].name;
        this.listJobsForPrinter(printerName).subscribe((jobs) => {
          let pending = false;
          for (const job of jobs) {
            if (job.status === 'pending' || job.status === 'processing') {
              pending = true;
            } else if (job.status === 'completed') {
              this.printAcknowledgeForPrinter(job.name).subscribe((result) => {
                this.acknowledgeJob(printerName, job.name).subscribe((j) => {});
              });
            } else if (job.status === 'deleted') {
              this.acknowledgeJob(printerName, job.name).subscribe((j) => {});
            }
          }
          if (!pending) {
            this.getNextForPrinter(printerName).subscribe(
              (printJobs) => {
                for (const printJob of printJobs) {
                  this.downloadAcknowledgeForPrinter(printJob.name).subscribe(
                    (result) => {
                      this.printData(
                        printerName,
                        printJob.name,
                        printJob.dataBase64
                      ).subscribe((job) => {});
                    }
                  );
                }
              },
              (error) => {
                this.timerCallback(60000);
              }
            );
          }
          if (this.printerIndex === this.printers.length - 1) {
            this.timerCallback(120 * 1000);
          } else {
            this.timerCallback(1000);
          }
        });
      }
    }, duration);
  }

  enrollWorkstation(warehouse: string) {
    this.autoprintEnrollWorkstationGQL
      .mutate({ machineKey: this.machineId, name: this.machineName, warehouse })
      .pipe(map((result) => result.data.autoprintEnrollWorkstation))
      .subscribe(
        (result) => {
          this.workstation = result;
        },
        (error) => {
          console.log(error);
          this.workstation = null;
        }
      );
  }

  listEnabledPrinters(): Observable<PrinterEntity[]> {
    return this.autoprintListPrintersGQL
      .mutate({ machineKey: this.machineId })
      .pipe(
        map((result) => result.data.autoprintListPrinters as PrinterEntity[])
      );
  }

  enablePrinter(printerName: string): Observable<PrinterEntity> {
    return this.autoprintAddPrinterGQL
      .mutate({ machineKey: this.machineId, printerName })
      .pipe(map((result) => result.data.autoprintAddPrinter as PrinterEntity));
  }

  getNextForPrinter(printerName: string): Observable<PrintJob[]> {
    return this.autoprintGetNextForPrinterGQL
      .mutate({ machineKey: this.machineId, printerName })
      .pipe(
        map((result) => result.data.autoprintGetNextForPrinter as PrintJob[])
      );
  }

  downloadAcknowledgeForPrinter(shipment: string): Observable<boolean> {
    return this.autoprintDownloadAcknowledgeForPrinterGQL
      .mutate({ shipment })
      .pipe(
        map(
          (result) =>
            result.data.autoprintDownloadAcknowledgeForPrinter as boolean
        )
      );
  }

  printAcknowledgeForPrinter(shipment: string): Observable<boolean> {
    return this.autoprintPrintAcknowledgeForPrinterGQL
      .mutate({ shipment })
      .pipe(
        map(
          (result) => result.data.autoprintPrintAcknowledgeForPrinter as boolean
        )
      );
  }

  getMachineName(): string {
    return this.machineName;
  }

  getMachineKey(): string {
    return this.machineId;
  }

  getWorkstation(): WorkstationEntity {
    return this.workstation;
  }

  version(): Observable<Version> {
    return this.httpClient
      .get<Version>('http://localhost:9900/version')
      .pipe(first());
  }

  listAvailablePrinters(): Observable<Printer[]> {
    return this.httpClient
      .get<Printer[]>('http://localhost:9900/listPrinters')
      .pipe(first());
  }

  listJobsForPrinter(printerName: string): Observable<Job[]> {
    return this.httpClient
      .post<Job[]>('http://localhost:9900/listJobsForPrinter', { printerName })
      .pipe(first());
  }

  printData(
    printerName: string,
    jobName: string,
    dataBase64: string
  ): Observable<Job> {
    return this.httpClient
      .post<Job>('http://localhost:9900/printData', {
        printerName,
        jobName,
        acknowledge: true,
        dataBase64,
        tray: '',
        paperSize: 'Letter'
      })
      .pipe(first());
  }

  acknowledgeJob(printerName: string, jobName: string): Observable<Job> {
    return this.httpClient
      .post<Job>('http://localhost:9900/acknowledgeJob', {
        printerName,
        jobName
      })
      .pipe(first());
  }
}

export class Version {
  version: string;
}

export class Printer {
  name: string;
  status: string;
  trays: [string];
  pendingCount: number;
  processingCount: number;
  completedCount: number;
}

export class Job {
  name: string;
  scheduled: string; // Date?
  completed: string;
  status: string;
  tray: string;
  paperSize: string;
  acknowledge: boolean;
}

class PrintDataRequest {}
