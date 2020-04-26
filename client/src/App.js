import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'></div>
      <Footer />
    </div>
  );
}

export default App;

/*<Route exact path='/' component={Landing} />*/
