import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListCidadesComponent } from './home-list-cidades.component';

describe('HomeListCidadesComponent', () => {
  let component: HomeListCidadesComponent;
  let fixture: ComponentFixture<HomeListCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListCidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
