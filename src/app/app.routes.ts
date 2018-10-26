import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo:'editor/1', pathMatch: 'full'},
  {path: 'search', loadChildren: './youtube-search/youtube-search.module#YoutubeSearchModule'},
  {path: 'editor/:id', loadChildren: './editor/editor.module#EditorModule'},
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  {path: '**', redirectTo: '/'}
];
