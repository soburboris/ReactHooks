import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import TopBar from 'components/topBar'
import Authorized from 'modal/authorized'
import Routes from 'pages/routes'
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'


const App = (state) => {

  return (
    <CurrentUserProvider>
      <CurrentUserChecker>

        <Router>
          <Authorized state={state}/>
          <TopBar state={state} />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}



ReactDOM.render(<App />, document.getElementById('root')
);

