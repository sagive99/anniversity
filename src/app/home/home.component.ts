import { Component, OnInit } from '@angular/core';
import { MediaContent, medias } from '../media/media.types';
import { Item } from '../interactive/interactive.type';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('1s ease-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  points: MediaContent[] = medias;

  family: Item = {
    name: 'family',
    text: 'משפוחה',
  };

  ouzo: Item = {
    name: 'ouzo',
    text: '?חגיגות אה',
  };

  selectedMedia: MediaContent = null;
  mediaTop: string;
  showStartScreen = true;
  splashState = 'visible';

  constructor() {}

  ngOnInit(): void {}

  openMedia(point: MediaContent, event: MouseEvent): void {
    this.selectedMedia = point;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.mediaTop = `${rect.top + window.scrollY + rect.height + 10}px`;
  }

  hideStartScreen = () => {
    this.splashState = 'hidden';

    setTimeout(() => {
      this.showStartScreen = false;
    }, 1000);
  };
}
