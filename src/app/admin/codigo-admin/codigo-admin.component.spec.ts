import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoAdminComponent } from './codigo-admin.component';

describe('CodigoAdminComponent', () => {
  let component: CodigoAdminComponent;
  let fixture: ComponentFixture<CodigoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
