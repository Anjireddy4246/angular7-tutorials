import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFbFormComponent } from './model-driven-fb-form.component';

describe('ModelDrivenFbFormComponent', () => {
  let component: ModelDrivenFbFormComponent;
  let fixture: ComponentFixture<ModelDrivenFbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenFbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
