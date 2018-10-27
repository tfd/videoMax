import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../models/Project';

@Component({
  selector: 'vmax-preview-thumbnail',
  templateUrl: './preview-thumbnail.component.html',
  styleUrls: ['./preview-thumbnail.component.css']
})
export class PreviewThumbnailComponent {

  @Input() project: Project;
  @Input() hasEdit = false;
  @Input() hasDelete = false;
  @Input() hasAdd = false;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();
  @Output() add = new EventEmitter<Project>();

  constructor() {
  }

  onEdit(project: Project) {
    this.edit.emit(project);
  }

  onDelete(project: Project) {
    this.delete.emit(project);
  }

  onAdd(project: Project) {
    this.add.emit(project);
  }

}
