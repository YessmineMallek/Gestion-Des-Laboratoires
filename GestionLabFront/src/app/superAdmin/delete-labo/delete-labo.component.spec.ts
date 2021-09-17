import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLaboComponent } from './delete-labo.component';

describe('DeleteLaboComponent', () => {
  let component: DeleteLaboComponent;
  let fixture: ComponentFixture<DeleteLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
