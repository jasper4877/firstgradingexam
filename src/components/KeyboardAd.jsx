import React from 'react';
import './KeyboardAd.css';

const KeyboardAd = () => {
  return (
    <div className="keyboard-ad">
      <div className="card">
        <div className="card-header">
          <h1>TechnoType Keyboards Presents</h1>
          <h2>KB-X1000</h2>
          <p className="card-description">
            High-performance mechanical keyboard for gamers and professionals
          </p>
        </div>
        <div className="card-content">
          <img 
            src="https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-d-rendering-of-a-streamer-s-workspace-computer-keyboard-on-black-image_3855697.jpg" 
            alt="KB-X1000 Keyboard" 
            className="keyboard-image"
          />
          
          <div className="section">
            <h3>Product Overview</h3>
            <p>
              The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
              professionals, and everyday users who demand precision and comfort. It features 
              customizable RGB backlighting, durable mechanical switches, and programmable 
              keys to enhance your typing and gaming experience.
            </p>
          </div>
          
          <div className="section">
            <h3>Specifications</h3>
            <ul className="spec-list">
              <li>Switch Type: Cherry MX Red (Mechanical)</li>
              <li>Key Layout: Full-size (104 keys)</li>
              <li>Backlighting: RGB with customizable colors</li>
              <li>Connectivity: Wired (USB 2.0)</li>
              <li>Dimensions: 440 mm x 135 mm x 35 mm</li>
              <li>Weight: 1.2 kg</li>
              <li>Cable Length: 1.8 meters</li>
            </ul>
          </div>
          
          <div className="section">
            <h3>Key Features</h3>
            <div className="feature-badges">
              <span className="badge">Customizable RGB Backlighting</span>
              <span className="badge">Mechanical Switches</span>
              <span className="badge">Programmable Keys</span>
              <span className="badge">Anti-Ghosting & N-Key Rollover</span>
              <span className="badge">Dedicated Media Controls</span>
            </div>
          </div>
          
          <div className="section">
            <h3>In the Box</h3>
            <ul className="box-list">
              <li>KB-X1000 Keyboard</li>
              <li>USB Cable</li>
              <li>User Manual</li>
              <li>Keycap Removal Tool</li>
              <li>Warranty Card</li>
            </ul>
          </div>
          
          <div className="footer">
            <p className="slogan">
              "Type Safe with TechnoType Keyboards!"
            </p>
            <p>
              For more information, visit <a href="http://www.technotype.com">www.technotype.com</a>
            </p>
            <p>
              Support: <a href="mailto:support@technotype.com">support@technotype.com</a> | Hotline: 1-800-555-1234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardAd;