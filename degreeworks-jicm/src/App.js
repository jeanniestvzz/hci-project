import React from 'react';
import { Header, StudentInformation, DegreeProgressBar } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <StudentInformation/>
      <DegreeProgressBar progress='32.5'/>
    </div>
  );
}

export default App;
