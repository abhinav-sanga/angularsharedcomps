import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostcompComponent } from './hostcomp.component';

describe('HostcompComponent', () => {
  let component: HostcompComponent;
  let fixture: ComponentFixture<HostcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
