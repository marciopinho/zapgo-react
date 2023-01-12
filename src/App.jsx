// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import countries from 'countries-phone-masks'
import PhoneForm from './components/PhoneForm'
import zapGoLogo from './assets/zapgo_logo_green.png'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container form-group phone-form">

          <img className="logo" alt="ZapGo" src={zapGoLogo} />

          <h2>Envie uma mensagem de WhatsApp sem salvar o contato.</h2>
          <div class="instructions">
            <h3>Cole o número e aperte o botão para ser redirecionado para o app ou WhatsApp web.</h3>
          </div>
        <PhoneForm />

      </div>
    </div>
  )
}

export default App
