import { Component, OnInit } from '@angular/core';
import { AutoprintService, Printer, Version } from '../../../shared/services/autoprint.service';
import { faPrint } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-autoprint',
  templateUrl: './autoprint.component.html',
  styles: []
})
export class AutoprintComponent implements OnInit {

  faPrint = faPrint;

  public loading = true;
  public version: Version;

  public printers: Printer[];

  constructor(private autoprintService: AutoprintService) {}

  ngOnInit() {
    this.autoprintService.version().subscribe((version) => {
      this.version = version;
      this.loading = false;
      this.loadPrinters();
    }, (error) => {
      this.version = null;
      this.loading = false;
    });
  }

  loadPrinters() {
    this.autoprintService.listPrinters().subscribe((printers) => {
      this.printers = printers;
    });
  }

  /*
  loadJobForPrinter(printerName: string) {
    this.autoprintService.listJobsForPrinter(printerName).subscribe((jobs) => {

    });
  }
  */
}
