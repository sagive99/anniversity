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
  private images = ['image1', 'image2', 'image3', 'image4', 'image5'];
  imageIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.setSrc();
  }

  setSrc = () => (this.src = `assets/${this.item.name}.png`);

  generatePhoto = () => {
    this.floatingSrc = this.randomPhoto();
    if (this.floatState === 'start') {
      this.floatState = 'end';
      setTimeout(() => {
        this.floatState = 'start';
        this.floatingSrc = '';
      }, 7500);
    }
  };

  randomPhoto = (): string => {
    if (this.imageIndex + 1 > this.images.length) {
      this.imageIndex = 0;
    }

    return `assets/${this.item.name}/${this.images[this.imageIndex++]}.jpg`;
  };
}
