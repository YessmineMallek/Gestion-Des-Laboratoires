import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirecteursComponent } from './list-directeurs.component';

describe('ListDirecteursComponent', () => {
  let component: ListDirecteursComponent;
  let fixture: ComponentFixture<ListDirecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDirecteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
