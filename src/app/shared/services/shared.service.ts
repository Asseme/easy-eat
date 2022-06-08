import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private mediaObserver: MediaObserver) { }

  getMediaObserverAsObservable(): Observable<MediaChange[]> {   
    return this.mediaObserver.asObservable()
  }

}
