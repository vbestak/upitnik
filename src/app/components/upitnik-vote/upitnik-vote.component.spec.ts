import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpitnikVoteComponent } from './upitnik-vote.component';

describe('UpitnikVoteComponent', () => {
  let component: UpitnikVoteComponent;
  let fixture: ComponentFixture<UpitnikVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpitnikVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpitnikVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
