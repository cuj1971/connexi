import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttabsComponent } from './contacttabs.component';

describe('ContacttabsComponent', () => {
  let component: ContacttabsComponent;
  let fixture: ComponentFixture<ContacttabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacttabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
