import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFileComponent } from './student-file.component';

describe('StudentFileComponent', () => {
  let component: StudentFileComponent;
  let fixture: ComponentFixture<StudentFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
