import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

import {
  AutoprintAddPrinterGQL,
  AutoprintEnrollWorkstationGQL,
  AutoprintListPrintersGQL,
  AutoprintTestWorkstationGQL,
  InventoryDetails,
  PrinterEntity,
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

  private workstation: WorkstationEntity;

  private userChangedSubscription: Subscription;

  constructor(
    private autoprintTestWorkstationGQL: AutoprintTestWorkstationGQL,
    private autoprintEnrollWorkstationGQL: AutoprintEnrollWorkstationGQL,
    private autoprintListPrintersGQL: AutoprintListPrintersGQL,
    private autoprintAddPrinterGQL: AutoprintAddPrinterGQL,
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
                this.testWorkstation();
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
        },
        (error) => {
          console.log(error);
          this.workstation = null;
        }
      );
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
      .mutate( {machineKey: this.machineId, printerName})
      .pipe(
        map((result) => result.data.autoprintAddPrinter as PrinterEntity )
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
