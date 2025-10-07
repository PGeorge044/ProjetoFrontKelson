import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/multiplicacao'
import Divisao from './components/divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <h1>Operações Matemáticas</h1>
      
      <Adicao num1={2} num2={2} />
      <Subtracao num1={2} num2={2} />
      <Multiplicacao num1={2} num2={2} />
      <Divisao num1={2} num2={2} />

      <PrecisoEstudar nomeDaTecnologia="React" /> 
    </div>
  )
}

export default App 
