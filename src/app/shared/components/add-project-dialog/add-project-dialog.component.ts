import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../models/Project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'vmax-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {

  public form: FormGroup;

  private project: Project;

  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project,
              private fb: FormBuilder) {
    this.project = {...data};
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [this.project.id || ''],
      name: [this.project.name || '', [Validators.required, Validators.minLength(1)]],
      description: [this.project.description || ''],
      url: [this.project.url || '', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.*/)]
      ],
      thumbnail: this.project.thumbnail || ''
    });
  }

}
