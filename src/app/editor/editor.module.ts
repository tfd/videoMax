import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {EditEventBusService} from './edit-event-bus.service';
import {EditorListViewComponent} from './editor-list-view/editor-list-view.component';
import {EditorVideoViewComponent} from './editor-video-view/editor-video-view.component';
import {EditorViewComponent} from './editor-view/editor-view.component';
import {EditorVideoImportComponent} from './editot-video-impot/editor-video-import.component';
import { ProjectsMaterialModule } from '../shared/projects-material.module';

@NgModule({
  imports: [
    YoutubePlayerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsMaterialModule,
    RouterModule.forChild([
      {path: '', component: EditorViewComponent}
    ])
  ],
  declarations: [EditorViewComponent, EditorVideoViewComponent, EditorListViewComponent, EditorVideoImportComponent],
  providers: [EditEventBusService]
})
export class EditorModule {
}
