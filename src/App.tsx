import { useState, FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

export function App(){

  const [ gasolinaInput, setGasolinaInput] = useState(0)
  const [ alcoolInput, setAlcoolInput] = useState(0)

  function calcular(event: FormEvent){
    alert('ui')
  }
  return(
    <>
     <main className='container'>
      <img 
        className='logo'
        src={logoImg} 
        alt="Logo da calculadora de gasolina ou alcool" 
      />

      <h1 className='title'>Qual melhor opção</h1>

      <form className='form' onSubmit={calcular}>
        <label htmlFor="">
          Álcool (preço por litro)
        </label>

        <input 
          className='input'
          type="number" 
          placeholder='4,90'
          min={1}
          step={0.1}
          required
        />

        <label htmlFor="">
          Gasolina (preço por litro)
        </label>

        <input 
          className='input'
          type="number" 
          placeholder='4,90'
          min={1}
          step={0.1}
          required
        />

        <input 
          className='button'
          type="submit" 
          value='calcular'
        />
      </form>
     </main>
    </>
  )
}