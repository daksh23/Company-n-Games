import React from 'react'
import Header from './Header'
import PlayHeader from './PlayHeader'
import { useLocation } from 'react-router-dom';

function SuffleHeader() {

    const location = useLocation();
    const path = location.pathname;

    console.log(path.slice(1));
    const GameName = path.slice(1).toUpperCase();

  return (
    <React.Fragment>
        {path === '/' ? <Header /> : <PlayHeader name={GameName}/>}
    </React.Fragment>
  )
}

export default SuffleHeader