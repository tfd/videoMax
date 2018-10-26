import {Component, OnInit} from '@angular/core';
import {ProjectStorageService} from '../services/project-storage.service';
import {Observable} from 'rxjs';
import {Project} from '../model/Project';

@Component({
  selector: 'vmax-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.css']
})
export class ProjectListViewComponent implements OnInit {

  constructor(private service: ProjectStorageService) {
  }

  public projects$: Observable<Array<Project>>;

  ngOnInit() {
    /*
    this.projects$ = zip(
      this.service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '}),
      this.service.addProject({name: 'project1', description: 'something', url: 'http://www.youtube.com '}),
      this.service.addProject({name: 'project2', description: 'something', url: 'http://www.youtube.com '}),
      this.service.addProject({name: 'project23', description: 'something', url: 'http://www.youtube.com '}),
      this.service.addProject({name: 'project4', description: 'something', url: 'http://www.youtube.com '}),
    )
      .pipe(
        mergeMap(() => this.service.getProjects(''))
      );
    */
    this.projects$ = this.service.getProjects('');
  }

  select(project: Project) {
    console.log(project);
  }

}
