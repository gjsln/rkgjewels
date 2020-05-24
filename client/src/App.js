import React from 'react';
import { Container, Navbar, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container-fluid p-0'>
        <Container/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
