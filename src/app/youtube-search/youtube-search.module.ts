import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {YoutubeDashComponent} from './youtube-dash/youtube-dash.component';
import {YoutubeSearchViewComponent} from './youtube-search-view/youtube-search-view.component';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    SharedModule,
    YoutubePlayerModule,
    RouterModule.forChild([
      {
        path: '', component: YoutubeDashComponent,
      },

    ])
  ],
  declarations: [
    YoutubeSearchViewComponent,
    YoutubeDashComponent,
  ]
})
export class YoutubeSearchModule {
}
