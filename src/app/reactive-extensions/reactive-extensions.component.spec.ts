import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveExtensionsComponent } from './reactive-extensions.component';

describe('ReactiveExtensionsComponent', () => {
  let component: ReactiveExtensionsComponent;
  let fixture: ComponentFixture<ReactiveExtensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveExtensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
