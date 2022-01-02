import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {
  public selectForm: FormGroup = new FormGroup({
    select: new FormControl()
  });

  public checkboxForm: FormGroup = new FormGroup({
    opt1: new FormControl(),
    opt2: new FormControl()
  });

  public menuOptions: string[] = [];

  constructor(private state: StateService) { }

  ngOnInit(): void {

  }

  public openDrawer(): void {
    this.state.toggleDrawer();
  }

}
