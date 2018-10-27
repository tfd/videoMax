import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {merge, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {EditEventBusService, EditEventTypes} from '../edit-event-bus.service';
import {Project, Translation} from '../../shared/models/Project';

@Component({
  selector: 'vmax-editot-video-impot',
  templateUrl: './editor-video-import.component.html',
  styleUrls: ['./editor-video-import.component.css']
})
export class EditorVideoImportComponent implements OnInit, OnDestroy {

  @Input() project: Project;
  @Output() addTranslation = new  EventEmitter<Translation>();

  private videoStoped = false;

  currentTime: number;
  translateForm: FormGroup;

  private subscription: Subscription;
  private onDestroySubject$ = new Subject();

  constructor(private editEventBus: EditEventBusService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.translateForm = this.fb.group({
      translateTerm: ['', [Validators.required], []], // first sync Valid, then async Valid (here empty)
    });

    this.subscription = merge(
      this.editEventBus.observe(EditEventTypes.VideoStopped)
    ).pipe(
      takeUntil(this.onDestroySubject$)
    ).subscribe((data) => {
          switch (data.type) {
            case EditEventTypes.VideoStopped:
              this.videoStoped = true;
              this.currentTime = data.data;
              break;
          }
        }
      );

  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next();
  }

  public submitTranslation() {
    // TODO refactor to emitting events, idiot!!!!
    const startTime = this.currentTime;
    const translation = this.translateForm.get('translateTerm').value;
    this.addTranslation.emit({
      startTime: startTime,
      translation: translation
    });
    console.log(' will submit ', this.translateForm.get('translateTerm').value);
    this.translateForm.get('translateTerm').setValue('');
  }

  public resetVideo() {
    this.editEventBus.emit(EditEventTypes.ResetVideo.toString(), null);
  }

  public playVideo() {
    this.editEventBus.emit(EditEventTypes.PlayVideo.toString(), null);
  }

  public emitStopVideo(keyEvent) {
    // console.log('  public emitStopVideo($event) {', event);
    this.editEventBus.emit(EditEventTypes.StopVideo.toString(), null);
  }
}
