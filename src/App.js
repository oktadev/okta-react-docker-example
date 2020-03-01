import React from 'react';
import { Calendar } from './Calendar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

function App() {
  return (
      <Router>
        <Security issuer='https://{YourOktaDomain}/oauth2/default'
                  clientId='{ClientId}'
                  redirectUri={window.location.origin + '/implicit/callback'} >
          <SecureRoute path='/' component={Calendar}/>
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
  );
}

export default App;
