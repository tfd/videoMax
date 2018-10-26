import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../shared/model/Project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'vmax-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: [''],
      url: ['', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.*/)]
      ]
    });
  }

}
