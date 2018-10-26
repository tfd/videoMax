import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatGridListModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {PreviewPlayerComponent} from './preview-player/preview-player.component';
import {YoutubeDashComponent} from './youtube-dash/youtube-dash.component';
import {YoutubeSearchComponent} from './youtube-search-view/youtube-search.component';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
    YoutubePlayerModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: YoutubeDashComponent,
      },

    ])
  ],
  declarations: [
    YoutubeSearchComponent,
    YoutubeDashComponent,
    PreviewPlayerComponent,
  ]
})
export class YoutubeSearchModule {
}
