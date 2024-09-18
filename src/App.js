import React from 'react';
import KeyboardAd from './components/KeyboardAd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TechnoType Keyboards</h1>
      </header>
      <main>
        <KeyboardAd />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 TechnoType Keyboards. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;