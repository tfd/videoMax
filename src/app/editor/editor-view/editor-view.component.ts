import {Component, OnInit} from '@angular/core';
import {Project, Translation} from 'src/app/shared/models/Project';
import {ActivatedRoute} from '@angular/router';
import {ProjectStorageService} from '../../services/project-storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'vmax-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.css']
})
export class EditorViewComponent implements OnInit {

  public id: string;
  public project$: Observable<Project>;

  constructor(private route: ActivatedRoute, private projectService: ProjectStorageService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.project$ = this.projectService.getProject(this.id);
  }

  addTranslation(translation: Translation) {
    console.log('addTranslation', this.id, translation);
    this.projectService.addTranslation(this.id, translation).subscribe(project => console.log(project));
  }
}
