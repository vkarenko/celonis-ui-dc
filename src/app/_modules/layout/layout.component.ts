import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  isScrolled = false;
  layoutWidth: number;

  private _subscription: Subscription;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this._subscription = fromEvent(window, 'scroll').pipe(
      // debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(
      (event: any) => {
        this.isScrolled = (event.target.scrollingElement.scrollTop > 12);
        this.layoutWidth = this.element.nativeElement.children[0].clientWidth;
      }
    );

    this._subscription.add(fromEvent(window, 'resize').pipe(
      debounceTime(600),
      distinctUntilChanged(),
    ).subscribe((event: any) => this.layoutWidth = this.element.nativeElement.children[0].clientWidth));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
