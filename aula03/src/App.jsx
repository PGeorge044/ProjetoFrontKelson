import React from 'react'
import Aluno from './componets/Produto'

const App = () => {
  return (
    <div>
      {
        [
          {Nome: "Short Saia", Preço: 400.00, Categoria: "Short", Quantidade: 9},
          {Nome: "Casaco Colcci", Preço: 90.00, Categoria: "Blusao", Quantidade: 6},
          {Nome: "Camisa Aramis", Preço: 480.00, Categoria: "Camisa", Quantidade: 5}
        ].map((produto)=> 
          <produto nome={produto.Nome} Preço= {produto.Preço} Categoria= {produto.Categoria} Quantidade= {produto.Quantidade}/>
         )
      }
    </div>
  )
}

export default App