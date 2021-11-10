import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocatarioComponent } from './home-locatario.component';

describe('HomeLocatarioComponent', () => {
  let component: HomeLocatarioComponent;
  let fixture: ComponentFixture<HomeLocatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLocatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
