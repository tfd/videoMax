import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsMaterialModule} from './projects-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HourMinuteSecondsPipe} from './pipes/pipes';
import {PreviewPlayerComponent} from './components/preview-player/preview-player.component';
import {PreviewThumbnailComponent} from './components/preview-thumbnail/preview-thumbnail.component';
import {AddProjectDialogComponent} from './components/add-project-dialog/add-project-dialog.component';
import {GoogleKeyInputComponent} from './components/google-key-input/google-key-input.component';

@NgModule({
  declarations: [
    AddProjectDialogComponent,
    PreviewPlayerComponent,
    PreviewThumbnailComponent,
    GoogleKeyInputComponent,
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
    PreviewThumbnailComponent,
    GoogleKeyInputComponent,
    HourMinuteSecondsPipe,
  ],
  entryComponents: [
    AddProjectDialogComponent,
  ]
})
export class SharedModule {
}
