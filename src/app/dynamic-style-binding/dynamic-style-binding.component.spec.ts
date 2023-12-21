import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStyleBindingComponent } from './dynamic-style-binding.component';

describe('DynamicStyleBindingComponent', () => {
  let component: DynamicStyleBindingComponent;
  let fixture: ComponentFixture<DynamicStyleBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicStyleBindingComponent]
    });
    fixture = TestBed.createComponent(DynamicStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
