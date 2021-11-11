import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImagensComponent } from './home-imagens.component';

describe('HomeImagensComponent', () => {
  let component: HomeImagensComponent;
  let fixture: ComponentFixture<HomeImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
