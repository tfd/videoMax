import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleKeyService {

  private key: string;

  private GOOGLE_KEY = 'googleKey';

  constructor() {
    this.key = localStorage.getItem(this.GOOGLE_KEY);
  }

  public hasKey(): boolean {
    return !!this.key;
  }

  public getKey(): string {
    return this.key;
  }

  public setKey(key: string) {
    localStorage.setItem(this.GOOGLE_KEY, key);
    this.key = localStorage.getItem(this.GOOGLE_KEY);
  }

}
