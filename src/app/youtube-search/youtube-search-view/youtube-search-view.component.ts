import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {SearchResultItem, YoutubeSearchService} from '../../services/youtube-search.service';
import {Project} from '../../shared/models/Project';
import {ProjectStorageService} from '../../services/project-storage.service';
import {MatDialog} from '@angular/material';
import {AddProjectDialogComponent} from '../../shared/components/add-project-dialog/add-project-dialog.component';

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
              private projectsService: ProjectStorageService,
              private fb: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    const convertToProject = (result: SearchResultItem) => {
      return <Project>{
        id: 'youtube:' + result.id.videoId,
        name: result.snippet.title,
        description: result.snippet.description,
        url: 'https://youtu.be/' + result.id.videoId,
        thumbnail: result.snippet.thumbnails.default.url
      };
    };
    const convertToProjects = (results: SearchResultItem[]) => {
      return results.map(convertToProject);
    };
    const findVideos = (search: string) => this.youtubeSearch.searchFor(search.trim(), 5);

    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required, Validators.minLength(3)], []],
    });
    this.projects$ = this.search$.pipe(
      tap(p => console.log('search', p)),
      switchMap(findVideos),
      map(convertToProjects),
      tap(p => console.log('youtube found', p)),
    );
  }

  public search(search: string) {
    console.log('search', search);
    this.search$.next(search);
  }

  public onAdd(project: Project) {
    this.openDialog(project);
  }

  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
      data: {...project}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.projectsService.addProject(result)
          .subscribe(() => this.router.navigate(['/']));
      }
    });
  }

}
