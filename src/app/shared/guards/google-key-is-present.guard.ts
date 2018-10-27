import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {GoogleKeyService} from '../../services/google-key.service';
import {MatDialog} from '@angular/material';
import {GoogleKeyInputComponent} from '../components/google-key-input/google-key-input.component';

@Injectable({
  providedIn: 'root'
})
export class GoogleKeyIsPresentGuard implements CanActivate {

  constructor(private googleKeyService: GoogleKeyService, private dialog: MatDialog) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.googleKeyService.hasKey()) {
      return of(true);
    }

    const dialogRef = this.dialog.open(GoogleKeyInputComponent);

    return true;
  }

}
