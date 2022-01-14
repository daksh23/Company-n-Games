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
import CYW from './Components/CrackYourWay/CYW';
import Ttt from './Components/TicTacToe/Ttt';
import PuzzleSolver from './Components/Puzzle/Receives/PuzzleSolver';

function App() {
    
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/puzzle" element={<Puzzle />}/>
          <Route exact path="/puzzlesolver/:name/:userID" element={<PuzzleSolver />} />
          <Route exact path="/smashtheboss" element={<SmashBoss />}/>
          <Route exact path="/cyw" element={<CYW />}/>
          <Route exact path="/ttt" element={<Ttt />}/>
        </Routes>
    </Router>
  );
}

export default App;
