import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutComponent } from './create-tut.component';

describe('CreateTutComponent', () => {
  let component: CreateTutComponent;
  let fixture: ComponentFixture<CreateTutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
