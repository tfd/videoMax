import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {ProjectStorageService} from './services/project-storage.service';
import {SharedModule} from './shared';
import { ProjectsMaterialModule } from './shared/projects-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProjectsMaterialModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [ProjectStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
