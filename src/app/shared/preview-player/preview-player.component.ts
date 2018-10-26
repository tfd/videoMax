import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../model/Project';

@Component({
  selector: 'vmax-preview-player',
  templateUrl: './preview-player.component.html',
  styleUrls: ['./preview-player.component.css']
})
export class PreviewPlayerComponent {
  @Input() project: Project;
  @Input() hasEdit = false;
  @Input() hasDelete = false;
  @Input() hasAdd = false;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();
  @Output() add = new EventEmitter<Project>();

  player: YT.Player;

  constructor() {
  }

  savePlayer(player) {
    this.player = player;
  }

  onStateChange(event) {
    console.log('player state', event.data, event, 'player.getCurrentTime()', this.player.getCurrentTime());
  }

}
