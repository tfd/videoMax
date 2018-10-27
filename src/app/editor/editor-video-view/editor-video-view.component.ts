import {AfterViewChecked, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, merge, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {EditEventBusService, EditEventTypes} from '../edit-event-bus.service';
import {Project} from '../../shared/models/Project';

@Component({
  selector: 'vmax-editor-video-view',
  templateUrl: './editor-video-view.component.html',
  styleUrls: ['./editor-video-view.component.css']
})
export class EditorVideoViewComponent implements OnInit, OnDestroy {

  @Input() project: Project;
  youtubeVideoId: string;
  player: YT.Player;

  private resetEvent: Subscription;
  private onDestroySubject$ = new Subject();

  constructor(private editEventBus: EditEventBusService) {
  }

  ngOnInit() {
    this.youtubeVideoId = this.project.id.split(':')[1];
    this.resetEvent = merge(
      this.editEventBus.observe(EditEventTypes.StopVideo),
      this.editEventBus.observe(EditEventTypes.PlayVideo),
      this.editEventBus.observe(EditEventTypes.ResetVideo),
      this.editEventBus.observe(EditEventTypes.JumpToScene),
    ).pipe(
      takeUntil(this.onDestroySubject$),
    ).subscribe((data) => {
      switch (data.type) {
        case EditEventTypes.StopVideo:
          this.pauseVideo();
          break;
        case EditEventTypes.PlayVideo:
          this.playVideo();
          break;
        case EditEventTypes.ResetVideo:
          this.resetVideo();
          break;
        case EditEventTypes.JumpToScene:
          this.seekToVideo(data.data);
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next();
  }

  public pauseVideo() {
    this.player.pauseVideo();
    this.editEventBus.emit(EditEventTypes.VideoStopped, this.player.getCurrentTime());
  }

  public playVideo() {
    this.player.playVideo();
    this.editEventBus.emit(EditEventTypes.VideoPalying, this.player.getCurrentTime());
  }

  public resetVideo() {
    this.seekToVideo(0);
  }

  public seekToVideo(seconds: number) {
    this.player.seekTo(seconds, true);
  }

  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }

  onStateChange(event) {
    switch (event.data) {
      case 1: // playing
        this.playVideo();
        // this.editEventBus.emit(EditEventTypes.VideoPalying, this.player.getCurrentTime());
        break;
      case 2: // stop
        this.pauseVideo();
        // this.editEventBus.emit(EditEventTypes.VideoStopped, this.player.getCurrentTime());
        break;
      default:
      // empty
    }
    // console.log('player state', event.data, event, 'this.player.getCurrentTime()', this.player.getCurrentTime());
  }

}
