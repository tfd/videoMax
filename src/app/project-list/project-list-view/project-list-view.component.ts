import {Component, OnInit} from '@angular/core';
import {ProjectStorageService} from '../../services/project-storage.service';
import {Observable} from 'rxjs';
import {Project} from '../../shared/model/Project';
import {MatDialog} from '@angular/material';
import {AddProjectDialogComponent} from '../add-project-dialog/add-project-dialog.component';

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
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
      data: {name: '', description: '', url: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.service.addProject(result).subscribe(() => this.projects$ = this.service.getProjects(''));
      }
    });
  }
}
