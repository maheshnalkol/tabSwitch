import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfTabComponent } from './if-tab.component';

describe('IfTabComponent', () => {
  let component: IfTabComponent;
  let fixture: ComponentFixture<IfTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
