import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocalizaComponent } from './home-localiza.component';

describe('HomeLocalizaComponent', () => {
  let component: HomeLocalizaComponent;
  let fixture: ComponentFixture<HomeLocalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLocalizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
