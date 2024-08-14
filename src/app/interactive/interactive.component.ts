import { Component, Input, OnInit } from '@angular/core';
import { Item } from './interactive.type';

@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss'],
})
export class InteractiveComponent implements OnInit {
  @Input() item: Item;
  src: string;
  constructor() {}

  ngOnInit(): void {
    this.setSrc();
  }

  setSrc = () => this.src = `../../assets/${this.item.name}.png`;
}
