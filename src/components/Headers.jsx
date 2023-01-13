import { useEffect, useState } from 'react'

export default function Headers() {
  const [userCountry, setUserCountry] = useState('')
  useEffect(() => {
    getCountryIsoCode('https://ipapi.co/json/?fields=61439')
  }, [])

  const getCountryIsoCode = async (url) => {
    let data;
    const res = await fetch(url)
    data = await res.json();    
    setUserCountry(data.country)
  }

  let headerTwo;
  let headerThree;

  if(userCountry === 'BR') {
    headerTwo = 'Envie uma mensagem de WhatsApp sem salvar o contato.'
    headerThree = 'Cole o número e aperte o botão para ser redirecionado para o app ou WhatsApp web.'
  }
  if(userCountry === 'IS') {
    headerTwo = "Send WhatsApp messages to unsaved contacts.";
    headerThree = "Enter a phone number and hit send to redirect to the app or WhatsApp web.";
  }

  return (
    <>
      <h2>{headerTwo}</h2>
      <div className="instructions">
        <h3>{headerThree}</h3>
      </div>
    </>
  )
}