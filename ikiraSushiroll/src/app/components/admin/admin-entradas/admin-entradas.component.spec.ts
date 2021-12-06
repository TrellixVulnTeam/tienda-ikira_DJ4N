import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntradasComponent } from './admin-entradas.component';

describe('AdminEntradasComponent', () => {
  let component: AdminEntradasComponent;
  let fixture: ComponentFixture<AdminEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
