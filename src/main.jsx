import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations';
import { CharacterCustomizationsProvider } from './contexts/CharacterCustomizations';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CharacterCustomizationsProvider>
            <CharacterAnimationsProvider>
                <App />
            </CharacterAnimationsProvider>
        </CharacterCustomizationsProvider>
    </React.StrictMode>
);
