import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectStorageService} from './services/project-storage.service';
import {ProjectsMaterialModule} from './projects-material.module';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';


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
    BrowserAnimationsModule,
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
