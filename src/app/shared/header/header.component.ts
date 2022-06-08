import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout/core/media-change';
import { FormGroup } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  activeMediaQuery: string = '';
  isMobileContent: boolean = false;
  isHide: boolean = false;
  displayMobileSearchForm: boolean = false;
  searchForm: FormGroup = new FormGroup({});


  constructor(private headerService: HeaderService,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.buildSearchForm();
    this.initComponentContent();
  }

  private buildSearchForm() {
    this.searchForm = this.headerService.searchFormBuilder();
  }

  initComponentContent() {
    this.sharedService.getMediaObserverAsObservable()
      .pipe(takeUntil(this.destroy$)).subscribe(
        change => this.setMobileContentAtTrueFor(change)
      )
  }

  setMobileContentAtTrueFor(change: MediaChange[]) {
    this.isMobileContent = false;
    change.forEach(
      (item: { mqAlias: string; }) => {
        if (item.mqAlias === 'xs') {
          this.isMobileContent = true;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDisplayMobileSearchForm() {
    this.displayMobileSearchForm = true;
  }

  onHideMobileSearchForm() {
    this.displayMobileSearchForm = false;
  }
}


