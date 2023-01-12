import { useState, useEffect } from "react";
import countries from "countries-phone-masks";

export default function PhoneForm() {

  const [phone, setPhone] = useState('');

  useEffect(() => {
    getCountryIsoCode('https://ipapi.co/json/?fields=61439')
  }, [])

  const getCountryIsoCode = async (url) => {
    let data;
    const res = await fetch(url)
    data = await res.json();
    const countryCode = countries.find(({ iso }) => iso === data.country).code
    setPhone(countryCode)
  }

  function handleChange(event) {
    const value = event.target.value
    setPhone(value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}`)
  }

  return (
    <form onSubmit={handleSubmit} className="phone-form">

      <div className="user-input">
        <span className="flag">{}</span>
        <input
          id="input-phone"
          className="form-control"
          type="tel"
          value={phone}
          onChange={handleChange}
        />
        <button className="form-control btn btn-success">Send</button>
      </div>
    </form>
  )

}