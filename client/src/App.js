import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Screens/Home';
import Header from './Components/Extra/Header';
import Puzzle from './Components/Puzzle/Puzzle';
import SmashBoss from './Components/SmashTheBoss/SmashBoss';

function App() {
    
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/puzzle" element={<Puzzle />}/>
          <Route exact path="/smashtheboss" element={<SmashBoss />}/>
        </Routes>
    </Router>
  );
}

export default App;
