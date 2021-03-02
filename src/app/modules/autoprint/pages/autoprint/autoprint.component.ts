import { Component, OnInit } from '@angular/core';
import { AutoprintService, Printer, Version } from '../../../shared/services/autoprint.service';
import { faPrint } from '@fortawesome/pro-duotone-svg-icons';
import { WorkstationEntity } from '../../../../../generated/graphql';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { DialogService } from '../../../shared/services/dialog.service';
import { EnrollmentComponent } from '../../dialogs/enrollment/enrollment.component';

@Component({
  selector: 'app-autoprint',
  templateUrl: './autoprint.component.html',
  styles: []
})
export class AutoprintComponent implements OnInit {
  faPrint = faPrint;

  public loading = true;
  public version: Version;

  public workstation: WorkstationEntity;

  public printers: Printer[];

  constructor(private dialogService: DialogService, private autoprintService: AutoprintService) {}

  ngOnInit() {
    this.workstation = this.autoprintService.getWorkstation();

    if (this.workstation) {
      this.autoprintService.version().subscribe((version) => {
        this.version = version;
        this.loading = false;
        this.loadPrinters();
      }, (error) => {
        this.version = null;
        this.loading = false;
      });
    }
    else {
      this.loading = false;
    }
  }

  loadPrinters() {
    this.autoprintService.listPrinters().subscribe((printers) => {
      this.printers = printers;
    });
  }

  showEnrollmentDialog() {
    const options = new DialogBoxOptions();
    options.component = EnrollmentComponent;
    options.inputs = {};
    options.title = 'AutoPrint Enrollment';
    this.dialogService.showDialog(options);
  }

  /*
  loadJobForPrinter(printerName: string) {
    this.autoprintService.listJobsForPrinter(printerName).subscribe((jobs) => {

    });
  }
  */
}
