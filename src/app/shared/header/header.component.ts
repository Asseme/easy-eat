import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  mediaSub: Subscription | undefined;
  activeMediaQuery: string = '';
  isMobileContent: boolean = false;
  isHide: boolean = false;


  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.loadTemplateContent()
  }
  loadTemplateContent() {   
    this.mediaSub = this.mediaObserver.asObservable().subscribe(
      change => {
        this.isMobileContent = false;
        change.forEach(
          item => {
            if(item.mqAlias === 'xs') {
              this.loadMobileContent();
            }
            console.log(item.mqAlias)
          }
        )
      }
    )
  }

  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
  }
  
  loadMobileContent() {
    this.isMobileContent = true;
  }
}


