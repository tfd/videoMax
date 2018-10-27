import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hoursMinutesSeconds'
})
export class HourMinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    if (value && isFinite(value)) {
      const hours = Math.floor(value / 3600);
      value = value - hours * 3600;
      const minutes = Math.floor(value / 60);
      value = Math.floor(value - minutes * 60);
      if (hours > 0) {
        return hours.toString() + ':' +
          minutes.toString().padStart(2, '0') + ':' +
          value.toString().padStart(2, '0');
      }
      return minutes.toString().padStart(2, '0') + ':' +
        value.toString().padStart(2, '0');
    }
    return '--:--';
  }

}
