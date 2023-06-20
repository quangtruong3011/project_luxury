import React, { useState } from 'react';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  const [isOpen, setIsOpen] = useState(false);

  function handleLanguageSelect(language) {
    setSelectedLanguage(language);
    setIsOpen(false);
  }

  return (
    <div className="dropdown language" onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedLanguage} <i className="fa fa"></i></span>
      {isOpen && (
        <ul>
          <li className={selectedLanguage === 'ENG' ? 'active' : ''} onClick={() => handleLanguageSelect('ENG')}>
            <a href="#">ENG</a>
          </li>
          <li className={selectedLanguage === 'VN' ? 'active' : ''} onClick={() => handleLanguageSelect('VN')}>
            <a href="#">VN</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageDropdown;