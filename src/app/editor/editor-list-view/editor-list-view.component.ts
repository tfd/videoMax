import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project, Translation} from '../../shared/models/Project';
import {EditEventBusService, EditEventTypes} from '../edit-event-bus.service';

@Component({
  selector: 'vmax-editor-list-view',
  templateUrl: './editor-list-view.component.html',
  styleUrls: ['./editor-list-view.component.css']
})
export class EditorListViewComponent implements OnChanges {

  @Input() project: Project;

  translations: Translation[];

  constructor(private editEventBus: EditEventBusService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    //  debugger;
    if (changes['project'] && this.project) {
      // this.translations = Object.keys(this.project.translations).reduce((arr, key) => arr.push[this.project.translations[key]], []);
      this.translations = Object.values(this.project.translations || {});
      console.log('EditorListViewComponent', this.project, this.translations);
    }
  }
  jumpToScene(seconds: number) {
    this.editEventBus.emit(EditEventTypes.JumpToScene, seconds);
  }
}
