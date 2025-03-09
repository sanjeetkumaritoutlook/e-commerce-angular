import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeMicrouiComponent } from './consume-microui.component';

describe('ConsumeMicrouiComponent', () => {
  let component: ConsumeMicrouiComponent;
  let fixture: ComponentFixture<ConsumeMicrouiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumeMicrouiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeMicrouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
