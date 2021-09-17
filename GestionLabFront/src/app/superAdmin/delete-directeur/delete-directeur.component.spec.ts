import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDirecteurComponent } from './delete-directeur.component';

describe('DeleteDirecteurComponent', () => {
  let component: DeleteDirecteurComponent;
  let fixture: ComponentFixture<DeleteDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDirecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
