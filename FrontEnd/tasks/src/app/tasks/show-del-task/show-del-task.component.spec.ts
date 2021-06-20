import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelTaskComponent } from './show-del-task.component';

describe('ShowDelTaskComponent', () => {
  let component: ShowDelTaskComponent;
  let fixture: ComponentFixture<ShowDelTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
