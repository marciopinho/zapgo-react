import './App.css'
import Navbar from './components/Navbar'
import PhoneForm from './components/PhoneForm'
import zapGoLogo from './assets/zapgo_logo_green.png'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container form-group phone-form">

        <img className="logo" alt="ZapGo" src={zapGoLogo} />

        <PhoneForm />

      </div>
    </div>
  )
}

export default App
