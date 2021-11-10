import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCadastroClienteComponent } from './home-cadastro-cliente.component';

describe('HomeCadastroClienteComponent', () => {
  let component: HomeCadastroClienteComponent;
  let fixture: ComponentFixture<HomeCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCadastroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
