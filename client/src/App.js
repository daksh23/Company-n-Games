import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Screens/Home';
import Header from './Components/Extra/Header';
import Puzzle from './Components/Puzzle/Puzzle';

function App() {
    
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/puzzle" element={<Puzzle />}/>
        </Routes>
    </Router>
  );
}

export default App;
