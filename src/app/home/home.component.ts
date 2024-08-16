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
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

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
    text: '...המשפחה',
  };

  ouzo: Item = {
    name: 'ouzo',
    text: '!רק בשמחות',
  };

  selectedMedia: MediaContent = null;
  mediaTop: string;
  showStartScreen = true;
  splashState = 'visible';

  constructor(private dialog: MatDialog) {}

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

  startVideo(): void {
    this.dialog.open(VideoDialogComponent, {
      data: '../assets/niraVideo.mp4',
      width: '90vw',
    });
  }
}
