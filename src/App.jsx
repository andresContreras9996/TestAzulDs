import logo from './logo.svg';
import { AzulButton, AzulStepper } from '@the-ksquare-group/azul-ds';
import './App.css';
import React from 'react';


function App() {

  const options = [
    'option 1', 'option2', 'option3', 'test', 'test2'
  ]

  const onClickButton = (e) => {
    e.currentTarget.blur()

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ width: '100%' }}>
          <AzulStepper steps={options} activeStep={3} />
          <AzulButton variant="primary" label='Hello' onClick={onClickButton}></AzulButton>

        </div>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
