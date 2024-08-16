import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
})
export class VideoDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public videoUrl: string) {}

  ngOnInit(): void {}
}
