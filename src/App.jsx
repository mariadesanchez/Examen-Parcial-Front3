import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [user, setUser] = useState({
    name: '',
    color: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 2 && user.color.length > 5 && user.name.charAt(0) !== " "){ //user.name[0] !== " " //user.name.indexOf(" ") !== 0
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
      setShow(false)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Ingrese su nombre'
          type="text"
          onChange={(event) => setUser({...user, name: event.target.value})}
        />
        <input
          placeholder='Ingrese su color favorito'
          type="text"
          onChange={(event) => setUser({...user, color: event.target.value})}
        />
        <button>Enviar</button>
      </form>
      {err ? <span style={{color: 'red'}}>Por favor chequea que la información sea correcta</span> : null}
      
      {show ? <Card name={user.name} color={user.color}/> : null}
    </div>
  )
}

export default App
