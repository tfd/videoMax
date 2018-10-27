import {Component, OnInit} from '@angular/core';
import {ProjectStorageService} from '../../services/project-storage.service';
import {Observable} from 'rxjs';
import {Project} from '../../shared/models/Project';
import {MatDialog} from '@angular/material';
import {AddProjectDialogComponent} from '../../shared/components/add-project-dialog/add-project-dialog.component';
import {filter, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'vmax-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.css']
})
export class ProjectListViewComponent implements OnInit {

  constructor(private service: ProjectStorageService, public dialog: MatDialog) {
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

  edit(project: Project) {
    console.log('edit', project);
  }

  delete(project: Project) {
    console.log('delete', project);
  }

  add() {
    console.log('add');
    this.openDialog();
  }

  openDialog(): void {
    const saveProject = result => this.service.addProject(result);

    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
//      width: '250px',
      data: {id: '', name: '', description: '', url: '', thumbnail: ''}
    });

    dialogRef.afterClosed().pipe(
      filter(result => result),
      mergeMap(saveProject)
    ).subscribe(result => {
        this.projects$ = this.service.getProjects('');
      }
    );
  }
}
