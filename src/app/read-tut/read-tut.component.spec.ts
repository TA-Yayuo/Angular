import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTutComponent } from './read-tut.component';

describe('ReadTutComponent', () => {
  let component: ReadTutComponent;
  let fixture: ComponentFixture<ReadTutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadTutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
