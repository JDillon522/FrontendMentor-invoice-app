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

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.selectForm.valueChanges.subscribe(change => {
      console.log(change);

    })
  }

  public openDrawer(): void {
    this.state.toggleDrawer();
  }

}
