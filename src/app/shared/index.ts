import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsMaterialModule} from './projects-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HourMinuteSecondsPipe} from './pipes/pipes';
import {PreviewPlayerComponent} from './preview-player/preview-player.component';

@NgModule({
  declarations: [
    PreviewPlayerComponent,
    HourMinuteSecondsPipe,
  ],
  imports: [
    CommonModule,
    ProjectsMaterialModule,
    ReactiveFormsModule,
    YoutubePlayerModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    ProjectsMaterialModule,
    ReactiveFormsModule,
    YoutubePlayerModule,
    FlexLayoutModule,
    PreviewPlayerComponent,
    HourMinuteSecondsPipe,
  ]
})
export class SharedModule {
}
