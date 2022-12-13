import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFileComponent } from './employee-file.component';

describe('EmployeeFileComponent', () => {
  let component: EmployeeFileComponent;
  let fixture: ComponentFixture<EmployeeFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
