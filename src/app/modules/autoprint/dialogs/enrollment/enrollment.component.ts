import { Component, OnInit } from '@angular/core';
import { AutoprintService } from '../../../shared/services/autoprint.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styles: []
})
export class EnrollmentComponent implements OnInit {
  public machineName: string;
  public machineKey: string;

  constructor(private autoprintService: AutoprintService) { }

  ngOnInit() {
    this.machineName = this.autoprintService.getMachineName();
    this.machineKey = this.autoprintService.getMachineKey();
  }

}
