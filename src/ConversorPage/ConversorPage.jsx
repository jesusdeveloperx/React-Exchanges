import React, { useState } from 'react';
import './ConversorPage.css';

export default function ConversorPage(){
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = (rate, currency) => {
    if (amount !== '' && !isNaN(amount)) {
      const result = parseFloat(amount) * rate;
      setConvertedAmount(`${result.toFixed(2)} ${currency}`);
    } else {
      alert('Ingrese una cantidad válida.');
    }
  };

  return (
    <div className="app-container">
      <h1>Conversor de Monedas</h1>
      <div className="input-container">
        <label htmlFor="amount">Cantidad en Euros:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="buttons-container">
        <button onClick={() => convertCurrency(1, 'Euro (EUR)')}>Euro (EUR)</button>
        <button onClick={() => convertCurrency(1.18, 'Dólar (USD)')}>Dólar (USD)</button>
        <button onClick={() => convertCurrency(0.85, 'Libra (GBP)')}>Libra (GBP)</button>
        <button onClick={() => convertCurrency(130.52, 'Yen (JPY)')}>Yen (JPY)</button>
        <button onClick={() => convertCurrency(1.12, 'Fraco Suíço (CHF)')}>Fraco Suíço (CHF)</button>
      </div>
      {convertedAmount !== '' && (
        <div className="result-container">
          <p>Cantidad Convertida:</p>
          <p>{convertedAmount}</p>
        </div>
      )}
    </div>
    
  );
};

