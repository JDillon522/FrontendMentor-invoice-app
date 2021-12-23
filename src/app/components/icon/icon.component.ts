import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  public iconPath: string = '../../../assets/svg/';

  constructor() { }

  ngOnInit(): void {
    this.iconPath += this.name + '.svg';
  }

}
