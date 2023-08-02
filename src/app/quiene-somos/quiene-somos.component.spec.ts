import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieneSomosComponent } from './quiene-somos.component';

describe('QuieneSomosComponent', () => {
  let component: QuieneSomosComponent;
  let fixture: ComponentFixture<QuieneSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuieneSomosComponent]
    });
    fixture = TestBed.createComponent(QuieneSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
