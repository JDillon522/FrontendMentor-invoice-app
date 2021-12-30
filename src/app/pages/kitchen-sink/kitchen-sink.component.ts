import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  public openDrawer(): void {
    this.state.toggleDrawer();
  }

}
