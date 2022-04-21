import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Screens/Home';
import Puzzle from './Components/Puzzle/Puzzle';
import SmashBoss from './Components/SmashTheBoss/SmashBoss';
import CYW from './Components/CrackYourWay/CYW';
import Ttt from './Components/TicTacToe/Ttt';
import PuzzleSolver from './Components/Puzzle/Receives/PuzzleSolver';
import SnakeGame from './Components/Snake/SnakeGame';
import SuffleHeader from './Components/Screens/SuffleHeader';
import { ToastContainer} from 'react-toastify';

function App() {

    // useEffect(() => {
    //     // window.onload = function () {  
    //     //     document.onkeydown = function (e) {  
    //     //         return (e.which || e.keyCode) != 116;  
    //     //     };  
    //     // }

    //     // window.onbeforeunload = function() {
    //     //     return "Dude, are you sure you want to leave? Think of the kittens!";
    //     // }
    // }, [])
    

    return (
        <Router>
            <SuffleHeader/>
            <ToastContainer position='bottom-left' autoClose={2000} hideProgressBar={true}/>
            <Routes>
                <Route exact path="/puzzle" element={< Puzzle />}/>
                <Route
                    exact
                    path="/puzzlesolver/:challengeId/:name/:userID"
                    element={< PuzzleSolver />}/>
                <Route exact path="/smashtheboss" element={< SmashBoss />}/>
                <Route exact path='/snake' element={< SnakeGame />}/>
                <Route exact path="/cyw" element={< CYW />}/>
                <Route exact path="/ttt" element={< Ttt />}/>
                <Route exact path="/" element={< Home />}/>
            </Routes>
        </Router>
    );
}

export default App;
