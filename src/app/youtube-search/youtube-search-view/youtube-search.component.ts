import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SearchResultItem, YoutubeSearchService} from '../../services/youtube-search.service';

@Component({
  selector: 'vmax-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  searchResultItems$: Observable<SearchResultItem[]>;

  searchQuery: string;
  searchForm: FormGroup;

  constructor(private youtubeSearch: YoutubeSearchService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required, Validators.minLength(3)], []],
    });
  }

  public search(search: string) {
    this.searchResultItems$ = this.youtubeSearch.searchFor(search.trim(), 5)
      .pipe(
        tap((data) => {
          console.log(data);
        }),
      );
  }

  showPreview(videoId: string) {
    this.router.navigate(['preview', videoId], {
      relativeTo: this.route,
    });
  }
}
