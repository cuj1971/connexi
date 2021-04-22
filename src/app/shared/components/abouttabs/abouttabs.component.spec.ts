import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttabsComponent } from './abouttabs.component';

describe('AbouttabsComponent', () => {
  let component: AbouttabsComponent;
  let fixture: ComponentFixture<AbouttabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouttabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
