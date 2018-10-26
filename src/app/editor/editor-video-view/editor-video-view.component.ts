import {Component, OnInit} from '@angular/core';
import {EditEventBusService, EditEventTypes} from '../edit-event-bus.service';

@Component({
  selector: 'vmax-editor-video-view',
  templateUrl: './editor-video-view.component.html',
  styleUrls: ['./editor-video-view.component.css']
})
export class EditorVideoViewComponent implements OnInit {

  youtubeVideoId = 'oVJkdhqByUs';
  player: YT.Player;

  private resetEvent: any;

  constructor(private editEventBus: EditEventBusService) {
  }

  ngOnInit() {
    // TODO must be a better way to do this
    this.editEventBus.observe(EditEventTypes.StopVideo.toString())
      .subscribe((_) => {
        this.pauseVideo();
      });
    this.editEventBus.observe(EditEventTypes.PlayVideo.toString())
      .subscribe((_) => {
        this.playVideo();
      });
    this.editEventBus.observe(EditEventTypes.ResetVideo.toString())
      .subscribe((_) => {
        this.resetVideo();
      });
  }

  public pauseVideo() {
    this.player.pauseVideo();
    this.editEventBus.emit(EditEventTypes.VideoStopped.toString(), this.player.getCurrentTime());
  }

  public playVideo() {
    this.player.playVideo();
    this.editEventBus.emit(EditEventTypes.VideoPalying.toString(), this.player.getCurrentTime());
  }

  public resetVideo() {
    this.seekToVideo(0);
  }

  public seekToVideo(seconds: number) {
    this.player.playVideoAt(seconds);
  }

  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }

  onStateChange(event) {
    switch (event.data) {
      case 1: // playing
        this.playVideo();
        // this.editEventBus.emit(EditEventTypes.VideoPalying.toString(), null);
        break;
      case 2: // stop
        this.pauseVideo();
        // this.editEventBus.emit(EditEventTypes.VideoStopped.toString(), null);
        break;
      default:
      // empty
    }
    // console.log('player state', event.data, event, 'this.player.getCurrentTime()', this.player.getCurrentTime());
  }
}
