import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDashboardComponent } from './tela-dashboard.component';

describe('TelaDashboardComponent', () => {
  let component: TelaDashboardComponent;
  let fixture: ComponentFixture<TelaDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaDashboardComponent]
    });
    fixture = TestBed.createComponent(TelaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
