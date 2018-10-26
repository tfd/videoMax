import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectsMaterialModule} from '../projects-material.module';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ProjectListViewComponent}
    ])
  ],
  declarations: [
    ProjectListViewComponent,
    ProjectListComponent,
    AddProjectDialogComponent,
  ],
  entryComponents: [
    AddProjectDialogComponent,
  ],
})
export class ProjectListModule {
}
