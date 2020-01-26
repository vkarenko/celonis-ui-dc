import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  isScrolled = false;

  private _subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this._subscription = fromEvent(window, 'scroll').pipe(
      // debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(
      (event: any) => this.isScrolled = (event.target.scrollingElement.scrollTop > 12)
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
