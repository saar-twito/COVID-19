import React from 'react'
import MainInfo from './components//Main/MainInfo'

// * Style
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <MainInfo />
    </div>
  );
}

export default App;






