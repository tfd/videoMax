import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'vmax-preview-player',
  templateUrl: './preview-player.component.html',
  styleUrls: ['./preview-player.component.css']
})
export class PreviewPlayerComponent implements OnInit {
  @Input() youtubeVideoId: string;
  player: YT.Player;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.youtubeVideoId = this.route.snapshot.paramMap.get('id');
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data, event, 'this.player.getCurrentTime()', this.player.getCurrentTime());
  }

}
