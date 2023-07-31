import {useState }from 'react'

interface infoAlunoProps{
  nome: string;
  idade: string
}

export function App(){
  const [ input, setInput] = useState('')
  const [ idade, setIdade] = useState('')
  const [ infoAluno, setInfoAluno] = useState<infoAlunoProps>()
  const [ contador, setContador] = useState(0)

  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }
 
  function adicionar(){
    setContador(contador + 1)
  }

  function diminuir(){
    if(contador === 0){
      return;
    }
    setContador(contador - 1)
  }

  return(
    <>
      <h1>Conhecendo o useState</h1>

      <input 
        type="text" 
        placeholder='Digite seu nome:'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <input 
        type="text" 
        placeholder='Digite a idade'
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <br /><br />

      <button onClick={mostrarAluno} >Mostrar aluno </button>

      <hr />

      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h3>Sua idade é de: {infoAluno?.idade}</h3>

      <hr />
      <br />

      <h1>Contador useState</h1>
      
      <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
    </> 
  )
}