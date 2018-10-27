import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project, Translation} from '../../shared/models/Project';

@Component({
  selector: 'vmax-editor-list-view',
  templateUrl: './editor-list-view.component.html',
  styleUrls: ['./editor-list-view.component.css']
})
export class EditorListViewComponent implements OnChanges {

  @Input() project: Project;

  translations: Translation[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project'] && this.project) {
      // debugger;
      this.translations = Object.keys(this.project.translations).reduce((arr, key) => arr.push[this.project.translations[key]], []);
      console.log('EditorListViewComponent', this.project, this.translations);
    }
//    this.translations = Object.values(this.project.translations);
  }

}
