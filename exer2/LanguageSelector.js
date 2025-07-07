import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select value={language} onChange={e => setLanguage(e.target.value)}>
      <option value="fr">Français</option>
      <option value="en">English</option>
      {/* Ajoute d'autres langues si besoin */}
    </select>
  );
}
