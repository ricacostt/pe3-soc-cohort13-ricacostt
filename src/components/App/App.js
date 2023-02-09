import React from 'react';
import Display from '../Display/Display';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Footer from '../Footer/Footer';

/**
 * 
 * @returns the components that will appear on the UI
 */
function App() {
  return (
    <>
    <div> <NavBar/></div>
  
    <div className='App-header'>
      <Display/>
    </div>
    <Footer/>
    </>
  )
}

export default App