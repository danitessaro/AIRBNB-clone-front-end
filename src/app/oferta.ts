export interface Oferta {
  id: number;
  imovel: string;
  preco:string;
  disponibilidade: string;
  diarias: string;
  cidade: string;
  uf: string;
  quantQuartos: string;
  diaInicio:string;
  diaTerminio:string;
  }
  export const Oferta= [
    {
      id: 1,
      imovel:'Apartamento',
      preco:'100.00',
      disponibilidade:'Dezembro a Janeiro' ,
      diarias:'100.00',
      cidade: 'Porto Alegre',
      uf: 'Rio Grande do Sul ',
      quantQuartos: '2',
      diaInicio:'',
      diaTerminio:''
      },
      {
        id: 2,
        imovel:'Casa',
        preco:'150.00',
        disponibilidade:'Dezembro a Janeiro' ,
        diarias:'100.00',
        cidade: 'Porto Alegre',
        uf: 'Rio Grande do Sul ',
        quantQuartos: '2',
        diaInicio:'',
        diaTerminio:''
        },
        {
          id: 3,
          imovel:'Casa',
          preco:'110.00',
          disponibilidade:'Dezembro a Janeiro' ,
          diarias:'100.00',
          cidade: 'Florianopilis',
          uf: 'Santa Catarina ',
          quantQuartos: '2',
          diaInicio:'',
          diaTerminio:''
          }




  ];


