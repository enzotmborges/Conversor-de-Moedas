import React from 'react'
const { useState } = require("react")



const cambio = {
  BRL: 1, //MOEDA BR
  USD: 0.19, // DOLAR AMERICANO
  EUR: 0.16, // EURO
  G8P: 0.14, // LIBRA ESTERLINA
  JPY: 10.00 // IENE JAPONES
}

const Conversao = () => {

  const [quantI, setQuantI] = useState(0);
  const [quantF, setQuantF] = useState(0);
  const [convI, setConvI] = useState('BRL');
  const [convF, setConvF] = useState('USD');

  const calc = () => {
    const calc = cambio[convI] / cambio[convF];
    const valF = quantI / calc
    setConvF(valF.toFixed(2));
  };

  return (
    <div className="conversão">
      <h2>Conversor de Moedas</h2>

      <div>
        <input
          type="number"
          value={quantI}
          onChange={(e) => setQuantI(e.target.value)}
          />

          <select
            value={convF}
            onChange={(e) => setConvF(e.target.value)}
          >

            {Object.keys(cambio).map((parametro) => (

              <option key={parametro} value={parametro}>{parametro}</option>
              ))}

          </select>
          
          para

          <button onClick={calc}>Converter</button>
          
          </div>

          <p>{`${quantI} ${convI} equivale a ${convF}`}</p>
    </div>
  );

};


export default Conversao;