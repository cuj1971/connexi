import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhowearetabsComponent } from './whowearetabs.component';

describe('WhowearetabsComponent', () => {
  let component: WhowearetabsComponent;
  let fixture: ComponentFixture<WhowearetabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhowearetabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhowearetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
