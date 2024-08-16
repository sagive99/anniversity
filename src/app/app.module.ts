import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { InteractiveComponent } from './interactive/interactive.component';
import { MatButtonModule } from '@angular/material/button';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaComponent,
    InteractiveComponent,
    VideoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
