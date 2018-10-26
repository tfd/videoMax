import {YoutubePlayerModule} from 'ngx-youtube-player';
import { EditorListViewComponent } from './editor-list-view/editor-list-view.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { EditorVideoViewComponent } from './editor-video-view/editor-video-view.component';
import {ProjectsMaterialModule} from '../projects-material.module';
import { EditotVideoImpotComponent } from './editot-video-impot/editot-video-impot.component';

@NgModule({
  imports: [
    YoutubePlayerModule,
    CommonModule,
    ProjectsMaterialModule,
    RouterModule.forChild([
      {path: '', component: EditorViewComponent}
    ])
  ],
  declarations: [EditorViewComponent, EditorVideoViewComponent, EditorListViewComponent, EditotVideoImpotComponent]
})
export class EditorModule { }
