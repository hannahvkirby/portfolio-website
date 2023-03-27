import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Resume from './pages/resume'
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element = {<Home/>} exact />
        <Route path='/resume' element = {<Resume/>} exact />
      </Routes>
    </Router>
  );
}

export default App;