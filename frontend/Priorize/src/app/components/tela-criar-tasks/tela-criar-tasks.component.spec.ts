import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCriarTasksComponent } from './tela-criar-tasks.component';

describe('TelaCriarTasksComponent', () => {
  let component: TelaCriarTasksComponent;
  let fixture: ComponentFixture<TelaCriarTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCriarTasksComponent]
    });
    fixture = TestBed.createComponent(TelaCriarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
