import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../shared/models/Project';

@Component({
  selector: 'vmax-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  @Input()
  projects: Project[];

  @Output()
  add = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<Project>();

  @Output()
  delete = new EventEmitter<Project>();

  ngOnInit() {
  }

  trackByContactId(index, project) {
    return project.id;
  }

  onEdit(project: Project) {
    this.edit.emit(project);
  }

  onDelete(project: Project) {
    this.edit.emit(project);
  }

}
