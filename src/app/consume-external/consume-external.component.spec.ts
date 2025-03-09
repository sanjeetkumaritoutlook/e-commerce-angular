import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeExternalComponent } from './consume-external.component';

describe('ConsumeExternalComponent', () => {
  let component: ConsumeExternalComponent;
  let fixture: ComponentFixture<ConsumeExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumeExternalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
