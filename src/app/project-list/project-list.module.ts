import {NgModule} from '@angular/core';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {RouterModule} from '@angular/router';
import {AddProjectDialogComponent} from '../shared/components/add-project-dialog/add-project-dialog.component';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    SharedModule,
    YoutubePlayerModule,
    RouterModule.forChild([
      {path: '', component: ProjectListViewComponent}
    ])
  ],
  declarations: [
    ProjectListViewComponent,
    ProjectListComponent,
  ],
})
export class ProjectListModule {
}
