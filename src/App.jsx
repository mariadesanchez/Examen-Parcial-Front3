import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [user, setUser] = useState({
    name: '',
    mascota:'',
    color: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState('')
    // {
  //   // nombreErrorLength:'El Nombre debe tener como mínimo 3 caracteres',
  //   // colorErrorLength:'El color debe tener al menos 6 caracteres',
  //   // colorNumeral:'El color debe comenzar con #',
  //   // nombreEspacio:'El nombre no puede comenzar con espacio',


  // })

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 2 && user.color.length > 5 && user.color.charAt(0) == "#" && user.mascota.length > 2 && user.name.charAt(0) !== " "){ //user.name[0] !== " " //user.name.indexOf(" ") !== 0
      setShow(true)
      setErr(false)
    } if(user.name.length <3) {
      setErr('El Nombre debe tener como mínimo 3 caracteres');
      setShow(false)}
      if(user.color.length < 7){
        setErr('El color debe tener al menos 6 caracteres');
      setShow(false)
    }
    if(user.color.charAt(0) !== "#"){
      setErr('El color debe comenzar con #');
    setShow(false)
  }
  if(user.mascota.length < 3){
    setErr('La mascota debe tener como mínimo 3 caracteres');
  setShow(false)
}
if(user.name.charAt(0) == " "){
  setErr('El nombre no puede comenzar con espacio');
setShow(false)
}
  }

  return (
    <div className="App" style={{ backgroundColor: '#A9A9A9',width:'400px',height:'250px',borderRadius:'10px'}}>
      <form onSubmit={handleSubmit}>
        <h3> Elije un Color</h3>
     
        <input
          placeholder='Ingrese su nombre'style={{width
            :'300px',height:'20px'}}
          type="text"
          onChange={(event) => setUser({...user, name: event.target.value})}
        /><br /><br />

        <input
          placeholder='Ingrese Mascota favorita'style={{width
            :'300px',height:'20px'}}
          type="text"
          onChange={(event) => setUser({...user, mascota: event.target.value})}
        /><br /><br />

        <input
          placeholder='Ingrese su color favorito (formato HEX)'style={{width
          :'300px',height:'20px'}}
          type="text"
          onChange={(event) => setUser({...user, color: event.target.value})}
        /><br/><br/>
        <button style={{backgroundColor:'#6495ED', width:'300px'}}>Enviar</button>
      </form><br/>
      {err ? <span style={{color: 'red'}}>{err}</span> : null}
      
      {show ? <Card name={user.name} mascota ={user.mascota}color={user.color}/> : null}
    </div>
  )
}

export default App
