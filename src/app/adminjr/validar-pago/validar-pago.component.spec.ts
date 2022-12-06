import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPagoComponent } from './validar-pago.component';

describe('ValidarPagoComponent', () => {
  let component: ValidarPagoComponent;
  let fixture: ComponentFixture<ValidarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
