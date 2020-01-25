import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSmallComponent } from './content-small.component';

describe('ContentSmallComponent', () => {
  let component: ContentSmallComponent;
  let fixture: ComponentFixture<ContentSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
