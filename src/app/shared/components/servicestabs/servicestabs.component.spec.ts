import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestabsComponent } from './servicestabs.component';

describe('ServicestabsComponent', () => {
  let component: ServicestabsComponent;
  let fixture: ComponentFixture<ServicestabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicestabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
