import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cadastro-cliente',
  templateUrl: './home-cadastro-cliente.component.html',
  styleUrls: ['./home-cadastro-cliente.component.css']
})
export class HomeCadastroClienteComponent implements OnInit {

  cadastroRealizado() {
    alert('Cadastro Realizado com Sucesso :) !');
 }
  constructor() { }

  ngOnInit(): void {
  }

}
