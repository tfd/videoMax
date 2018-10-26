import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {SearchResultItem, YoutubeSearchService} from '../../services/youtube-search.service';
import {Project} from '../../shared/model/Project';

@Component({
  selector: 'vmax-youtube-search-view',
  templateUrl: './youtube-search-view.component.html',
  styleUrls: ['./youtube-search-view.component.css']
})
export class YoutubeSearchViewComponent implements OnInit {

  projects$: Observable<Project[]>;
  search$ = new Subject<string>();
  searchForm: FormGroup;

  constructor(private youtubeSearch: YoutubeSearchService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const convertToProject = (result: SearchResultItem) => {
      return <Project>{
        id: 'youtube:' + result.id.videoId,
        name: '',
        description: '',
        url: 'https://youtu.be/' + result.id.videoId,
      };
    };
    const convertToProjects = (results: SearchResultItem[]) => {
      return results.map(convertToProject)
    };
    const findVideos = (search: string) => this.youtubeSearch.searchFor(search.trim(), 5);

    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required, Validators.minLength(3)], []],
    });
    this.projects$ = this.search$.pipe(
      tap(p => console.log('search', p)),
      switchMap(findVideos ),
      map(convertToProjects),
      tap(p => console.log('youtube found', p)),
    );
  }

  public search(search: string) {
    console.log('search', search);
    this.search$.next(search);
  }

  public onAdd(project: Project) {
    console.log('add', project);
  }
}
