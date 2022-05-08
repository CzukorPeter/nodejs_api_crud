import React, {Fragment, useEffect} from 'react';
import AppNavbar from './components/layout/AppNavbar';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit(); 
  });
  return( 
  <Fragment>
    <AppNavbar />
  </Fragment>
);
};

export default App;