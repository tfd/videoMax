import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/Project';

@Component({
  selector: 'vmax-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.css']
})
export class EditorViewComponent implements OnInit {

  public projects: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
