import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AddProjectDialogComponent} from './project-list/add-project-dialog/add-project-dialog.component';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {ProjectsMaterialModule} from './projects-material.module';
import {ProjectStorageService} from './services/project-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProjectsMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [ProjectStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
