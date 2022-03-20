import React from 'react'
import PlayHeader from './PlayHeader'
import { useLocation } from 'react-router-dom';

function SuffleHeader() {

    const location = useLocation();
    const path = location.pathname;

    console.log(path.slice(1));
    const GameName = path.slice(1).toUpperCase();

  return (
    <React.Fragment>
        {path === '/' ? "" : <PlayHeader name={GameName}/>}
    </React.Fragment>
  )
}

export default SuffleHeader