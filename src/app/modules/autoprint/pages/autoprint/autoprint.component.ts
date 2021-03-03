import { Component, OnInit } from '@angular/core';
import {
  AutoprintService,
  Printer,
  Version
} from '../../../shared/services/autoprint.service';
import { faPrint } from '@fortawesome/pro-duotone-svg-icons';
import { PrinterEntity, WorkstationEntity } from '../../../../../generated/graphql';
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

  public enabledPrinters: Printer[];
  public disabledPrinters: Printer[];

  public addedPrinters: PrinterEntity[];

  constructor(
    private dialogService: DialogService,
    private autoprintService: AutoprintService
  ) {}

  ngOnInit() {
    this.workstation = this.autoprintService.getWorkstation();

    if (this.workstation) {
      this.autoprintService.version().subscribe(
        (version) => {
          this.version = version;
          this.loading = false;
          this.loadPrinters();
        },
        (error) => {
          this.version = null;
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }

  loadPrinters() {
    this.autoprintService.listEnabledPrinters().subscribe((addedPrinters) => {
      this.addedPrinters = addedPrinters;
      this.autoprintService.listAvailablePrinters().subscribe((printers) => {
        this.enabledPrinters = [];
        this.disabledPrinters = [];
        for (const printer of printers) {
          let found = false;
          for (const addedPrinter of addedPrinters) {
            if (printer.name === addedPrinter.name) {
              found = true;
            }
          }
          if (found) {
            this.enabledPrinters = this.enabledPrinters.concat(printer);
          }
          else {
            this.disabledPrinters = this.disabledPrinters.concat(printer);
          }
        }
      });
    });
  }

  addPrinter(printer: Printer) {
    this.autoprintService.enablePrinter(printer.name).subscribe((addedPrinter) => {
      this.enabledPrinters = this.enabledPrinters.concat(printer);
      this.disabledPrinters = this.disabledPrinters.filter((disabledPrinter) => (disabledPrinter.name !== printer.name));
    });
  }

  removePrinter(printer: Printer) {
    /* TODO: enable this code, once the GQL exists
`   this.autoprintService.disablePrinter(printer.name).subscribe((removedPrinter) => {
      this.enabledPrinters = this.enabledPrinters.filter((disabledPrinter) => (disabledPrinter.name !== printer.name));
      this.disabledPrinters = this.disabledPrinters.concat(printer);
    });`
  */
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
