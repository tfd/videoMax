import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {
  // Alex
  // readonly BASE_URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyALn0S3A2KfRllUGxvMrOqp1gw9iLKlzpA&part=id';
  // Ronald
  readonly BASE_URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCqi0adiLPYvvQ5fSncbXXUjI1TNxYrKgQ&part=id,snippet&type=video&videoEmbeddable=true';

  constructor(private http: HttpClient) {
  }

  public searchFor(searchQuery: string, maxresult: number) {
    return this.http.get<SearchResult>(`${this.BASE_URL}&maxResults=${maxresult}&q=${searchQuery}`)
      .pipe(
        map((data) => {
          console.log(data);
          return data.items as SearchResultItem[];
        }),
      );
  }
}

export interface SearchResult {
  etag: string;
  items: SearchResultItem[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
}

export interface SearchResultItem {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet?: {
    title: string,
    description: string,
    thumbnails?: {
      default: {
        url: string;
      }
    }
  };
}
