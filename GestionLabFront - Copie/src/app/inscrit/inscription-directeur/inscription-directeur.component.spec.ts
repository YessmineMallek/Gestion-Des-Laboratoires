import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDirecteurComponent } from './inscription-directeur.component';

describe('InscriptionDirecteurComponent', () => {
  let component: InscriptionDirecteurComponent;
  let fixture: ComponentFixture<InscriptionDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDirecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
