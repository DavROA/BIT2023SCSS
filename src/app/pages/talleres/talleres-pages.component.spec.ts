import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresPagesComponent } from './talleres-pages.component';

describe('TalleresPagesComponent', () => {
  let component: TalleresPagesComponent;
  let fixture: ComponentFixture<TalleresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalleresPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalleresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
