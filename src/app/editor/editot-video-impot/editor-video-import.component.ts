import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EditEventBusService, EditEventTypes} from '../edit-event-bus.service';

@Component({
  selector: 'vmax-editot-video-impot',
  templateUrl: './editor-video-import.component.html',
  styleUrls: ['./editor-video-import.component.css']
})
export class EditorVideoImportComponent implements OnInit {


  private videoStoped = false;
  private videoSub: any;

  currentTime: number;
  translationText: string;
  translateForm: FormGroup;

  constructor(private editEventBus: EditEventBusService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.translateForm = this.fb.group({
      translateTerm: ['', [Validators.required], []], // first sync Valid, then async Valid (here empty)
    });

    this.editEventBus.observe(EditEventTypes.VideoStopped.toString())
      .subscribe((data) => {
        this.videoStoped = true;
        this.currentTime = data;
      });
  }

  public submitTranslation() {
    // TODO transmit value
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
