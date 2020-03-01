import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcompComponent } from './sharedcomp.component';

describe('SharedcompComponent', () => {
  let component: SharedcompComponent;
  let fixture: ComponentFixture<SharedcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
