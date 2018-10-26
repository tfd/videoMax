import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vmax-editor-video-view',
  templateUrl: './editor-video-view.component.html',
  styleUrls: ['./editor-video-view.component.css']
})
export class EditorVideoViewComponent implements OnInit {

  youtubeVideoId = 'oVJkdhqByUs';
  player: YT.Player;

  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    switch (event.data) {
      case 1: // playing
        break;
      case 2: // stop
        break;
      default:
        // empty
    }
    console.log('player state', event.data, event, 'this.player.getCurrentTime()', this.player.getCurrentTime());
  }
}
