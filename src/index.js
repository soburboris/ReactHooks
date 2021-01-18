import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import TopBar from 'components/topBar'
import Routes from 'pages/routes'

const App = (state) => {
  return (
    <div >
      <Router>
        <TopBar state={state}/>
        <Routes/>
      </Router>
      
    </div>
  )
}



ReactDOM.render(<App /> , document.getElementById('root')
);

