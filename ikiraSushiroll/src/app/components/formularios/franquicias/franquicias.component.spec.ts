import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranquiciasComponent } from './franquicias.component';

describe('FranquiciasComponent', () => {
  let component: FranquiciasComponent;
  let fixture: ComponentFixture<FranquiciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranquiciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranquiciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
