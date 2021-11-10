import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImoveisComponent } from './home-imoveis.component';

describe('HomeImoveisComponent', () => {
  let component: HomeImoveisComponent;
  let fixture: ComponentFixture<HomeImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
