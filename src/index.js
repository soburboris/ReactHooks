import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import TopBar from 'components/topBar'
import Routes from 'pages/routes'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = (state) => {
  
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar state={state}/>
          <Routes/>
        </Router>
      </CurrentUserChecker>      
    </CurrentUserProvider>
  )
}



ReactDOM.render(<App /> , document.getElementById('root')
);

