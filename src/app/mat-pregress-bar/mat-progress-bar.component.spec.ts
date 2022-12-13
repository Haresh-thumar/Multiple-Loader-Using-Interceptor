import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPregressBarComponent } from './mat-progress-bar.component';

describe('MatPregressBarComponent', () => {
  let component: MatPregressBarComponent;
  let fixture: ComponentFixture<MatPregressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatPregressBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatPregressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
