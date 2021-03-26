import React from 'react'
import MainInfo from './components//Main/MainInfo'
import { CoronaProvider } from './components/UseContext/Corona'

// * Style
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => (
  <CoronaProvider>
    <div className="App">
      <ToastContainer />
      <MainInfo />
    </div>
  </CoronaProvider>
)

export default App;






