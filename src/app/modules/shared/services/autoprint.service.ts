import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

const { CapacitorMachineId } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AutoprintService {
  constructor(
    // private autoprintEnrollWorkstationGQL: AutoprintEnrollWorkstationGql,
    private httpClient: HttpClient,
    private platform: Platform
  ) {
    if (platform.is('electron')) {
      CapacitorMachineId.getId(false).then((id) => {
        console.log(id);
      });
    }
    if (platform.is('desktop')) {
      console.log('desktop');
    }
  }

  version(): Observable<Version> {
    return this.httpClient
      .get<Version>('http://localhost:9900/version')
      .pipe(first());
  }

  listPrinters(): Observable<Printer[]> {
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
