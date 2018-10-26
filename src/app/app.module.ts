import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectsMaterialModule} from './projects-material.module';
import {ProjectStorageService} from './services/project-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListViewComponent,
    AddProjectDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProjectsMaterialModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  entryComponents: [
    AddProjectDialogComponent,
  ],
  providers: [ProjectStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
