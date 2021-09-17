import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabDirecComponent } from './edit-lab-direc.component';

describe('EditLabDirecComponent', () => {
  let component: EditLabDirecComponent;
  let fixture: ComponentFixture<EditLabDirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabDirecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
