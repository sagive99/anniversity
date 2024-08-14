import { Component, Input, OnInit } from '@angular/core';
import { Item } from './interactive.type';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss'],
  animations: [
    trigger('floatAnimation', [
      state('start', style({ opacity: 1, transform: 'scale(1.5)' })),
      state(
        'end',
        style({ opacity: 0.5, transform: 'translateY(-100vh) scale(1.5)' })
      ),
      transition('start => end', animate('7.5s ease-in-out')),
    ]),
  ],
})
export class InteractiveComponent implements OnInit {
  @Input() item: Item;
  src: string;
  floatState: string = 'start';
  floatingSrc: string;
  private images = ['image1'];

  constructor() {}

  ngOnInit(): void {
    this.setSrc();
  }

  setSrc = () => (this.src = `assets/${this.item.name}.png`);

  generatePhoto = () => {
    this.floatingSrc = this.randomPhoto();
    this.floatState = 'end';
    setTimeout(() => {
      this.floatState = 'start';
      this.floatingSrc = "";
    }, 7500);
  };

  randomPhoto = (): string =>
    `assets/${this.item.name}/${
      this.images[Math.floor(Math.random() * this.images.length)]
    }.jpg`;
}
