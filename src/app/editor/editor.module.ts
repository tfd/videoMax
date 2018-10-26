import { EditorListViewComponent } from './editor-list-view/editor-list-view.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { EditorVideoViewComponent } from './editor-video-view/editor-video-view.component';
import {ProjectsMaterialModule} from '../projects-material.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsMaterialModule,
    RouterModule.forChild([
      {path: '', component: EditorViewComponent}
    ])
  ],
  declarations: [EditorViewComponent, EditorVideoViewComponent, EditorListViewComponent]
})
export class EditorModule { }
