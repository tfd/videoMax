import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectStorageService} from './services/project-storage.service';
import {ProjectsMaterialModule} from './projects-material.module';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddProjectDialogComponent,
  ],
  providers: [ProjectStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
