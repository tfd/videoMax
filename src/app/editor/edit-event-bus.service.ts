import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditEventBusService {

  private messages$ = new Subject<EditEventBusMsg>();

  constructor() {
  }

  emit(eventType: string, data: any) {
    // console.log(' emit(eventType: string, data: any) {', eventType, data);
    this.messages$.next({type: eventType, data: data});
  }

  observe(eventType: string) {
    // console.log(' observe(eventType: string) { 00', eventType);
    return this.messages$.pipe(
      tap( (data) => {
        // console.log(' observe(eventType: string) { tap ', eventType, data);
      }),
      filter((result) => result.type === eventType),
      // map((result) => {result.type , result.data}),
    );
  }
}

export interface EditEventBusMsg {
  type: string;
  data?: any;
}

export enum EditEventTypes {
  StopVideo = 'StopVideo',
  PlayVideo = 'PlayVideo',
  ResetVideo = 'ResetVideo',
  VideoStopped = 'VideoStopped',
  VideoPalying = 'VideoPlaying',
  JumpToScene = 'JumpToScene',
}
