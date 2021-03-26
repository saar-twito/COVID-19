import React from 'react'
import Main from './components//Main/Main'
import { CoronaProvider } from './components/UseContext/Corona'

// * Style
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => (
  <CoronaProvider>
    <div className="App">
      <ToastContainer />
      <Main />
    </div>
  </CoronaProvider>
)

export default App;






