import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Screens/Home';
import Puzzle from './Components/Puzzle/Puzzle';
import SmashBoss from './Components/SmashTheBoss/SmashBoss';
import CYW from './Components/CrackYourWay/CYW';
import Ttt from './Components/TicTacToe/Ttt';
import PuzzleSolver from './Components/Puzzle/Receives/PuzzleSolver';
import Color from './Components/Colors/Color';
import SnakeGame from './Components/Snake/SnakeGame';
import SuffleHeader from './Components/Extra/SuffleHeader';

function App() {
  
  return (
    <Router>
        <SuffleHeader />
        <Routes>
          <Route exact path="/puzzle" element={<Puzzle />}/>
          <Route exact path="/puzzlesolver/:name/:userID" element={<PuzzleSolver />} />
          <Route exact path="/smashtheboss" element={<SmashBoss />}/>
          <Route exact path='/snake' element={<SnakeGame />} />
          {/* <Route exact path='/colors' element={<Color />} /> */}
          <Route exact path="/cyw" element={<CYW />}/>
          <Route exact path="/ttt" element={<Ttt />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;
