import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoprintService {

  constructor(private httpClient: HttpClient, private platform: Platform) {
    if (platform.is('desktop')) {

    }
  }



  listPrinters(): Observable<Printer[]> {
    return this.httpClient.get<Printer[]>('http://localhost:9900/listPrinters').pipe(first());
  }

  listJobsForPrinter(printerName: string): Observable<Job[]> {
    return this.httpClient.post<Job[]>('http://localhost:9900/listJobsForPrinter', { printerName }).pipe(first());
  }

  acknowledgeJob(printerName: string, jobName: string): Observable<Job> {
    return this.httpClient.post<Job>('http://localhost:9900/acknowledgeJob', { printerName, jobName }).pipe(first());
  }
}

export class Printer {
  name: string;
  status: string;
  trays: [string];
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
