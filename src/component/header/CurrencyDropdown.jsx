import React, { useState } from 'react';
import './Header.css';

function CurrencyDropdown() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isOpen, setIsOpen] = useState(false);

  function handleCurrencySelect(currency) {
    setSelectedCurrency(currency);
    setIsOpen(false);
  }

  return (
    <div className="dropdown currency" onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedCurrency} <i className="fa fa"></i></span>
      {isOpen && (
        <ul>
          <li className={selectedCurrency === 'USD' ? 'active' : ''} onClick={() => handleCurrencySelect('USD')}>
            <a href="#">USD</a>
          </li>
          <li className={selectedCurrency === 'EUR' ? 'active' : ''} onClick={() => handleCurrencySelect('VND')}>
            <a href="#">VND</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default CurrencyDropdown;
