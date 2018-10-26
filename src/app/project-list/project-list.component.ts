import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../model/Project';

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
  select = new EventEmitter<Project>();

  ngOnInit() {
  }

  trackByContactId(index, project) {
    return project.id;
  }

}
