import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpitnikViewComponent } from './upitnik-view.component';

describe('UpitnikViewComponent', () => {
  let component: UpitnikViewComponent;
  let fixture: ComponentFixture<UpitnikViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpitnikViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpitnikViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
