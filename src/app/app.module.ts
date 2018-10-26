import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectListViewComponent} from './project-list-view/project-list-view.component';
import {ProjectStorageService} from './services/project-storage.service';
import {ProjectsMaterialModule} from './projects-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListViewComponent
  ],
  imports: [
    BrowserModule,
    ProjectsMaterialModule
  ],
  providers: [ProjectStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
