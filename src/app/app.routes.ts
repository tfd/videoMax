import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', loadChildren: './youtube-search/youtube-search.module#YoutubeSearchModule'},
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  {path: '**', redirectTo: '/'}
];
