import { Component, OnInit } from '@angular/core';
import { MediaContent } from '../media/media.types';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  points: MediaContent[] = [
    {
      year: 1964,
      title: '!חתונה',
      imageUrl: '',
      description: 'תחילת הדרך, כמה אושר וחוויות מחכות... !היום המאושר בחייכם',
    },
    {
      year: 2014,
      title: '!50 שנות נישואין',
      imageUrl: '',
      description: 'תחילת הדרך, כמה אושר וחוויות מחכות...  !היום המאושר בחייכם',
    },
    {
      year: 2024,
      title: '!שנות נישואין 60',
      imageUrl: '',
      description: 'תחילת הדרך, כמה אושר וחוויות מחכות... !היום המאושר בחייכם',
    },
  ];

  selectedMedia: MediaContent;
  mediaTop: string;

  constructor() {}

  ngOnInit(): void {}

  openMedia(point: any, event: MouseEvent): void {
    this.selectedMedia = point;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.mediaTop = `${rect.top + window.scrollY + rect.height + 10}px`;
  }
}
