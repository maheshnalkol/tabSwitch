import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTabComponent } from './switch-tab.component';

describe('SwitchTabComponent', () => {
  let component: SwitchTabComponent;
  let fixture: ComponentFixture<SwitchTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
