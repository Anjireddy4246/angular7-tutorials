import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieratingsComponent } from './movieratings.component';

describe('MovieratingsComponent', () => {
  let component: MovieratingsComponent;
  let fixture: ComponentFixture<MovieratingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieratingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
