import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SearchResultItem, YoutubeSearchService} from '../../service/youtube-search.service';

@Component({
  selector: 'vmax-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  searchResultItems$: Observable<SearchResultItem[]>;

  searchQuery: string;
  searchForm: FormGroup;

  constructor(private youtubeSearch: YoutubeSearchService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required, Validators.minLength(3)],
    });
  }

  public search(search: string) {
    this.searchResultItems$ = this.youtubeSearch.searchFor(search)
      .pipe(
        tap((data) => {
          console.log(data);
        }),
      );
  }
}
