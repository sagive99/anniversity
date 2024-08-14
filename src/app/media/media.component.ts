import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MediaContent } from './media.types';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class MediaComponent implements OnChanges, OnInit {
  @Input() mediaContent: MediaContent;
  @Input() top: string = '0';
  showMedia: boolean = false;
  src: string;

  constructor() {}

  ngOnInit(): void {
    this.setSrc();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mediaContent) {
      this.showMedia = false;
      setTimeout(() => {
        this.showMedia = true;
      }, 300);
    }
    this.setSrc();
  }

  setSrc = () => (this.src = `assets/${this.mediaContent.imageUrl}`);
}
