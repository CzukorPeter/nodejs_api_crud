import React, {Fragment, useEffect} from 'react';
import AppNavbar from './components/layout/AppNavbar';
import Partners from './components/partners/Partners';
import AddActionBtn from './components/layout/AddActionBtn';
import AddPartnerModal from './components/partners/AddPartnerModal';
import EditPartnerModal from './components/partners/EditPartnerModal';
import AddSettlementModal from './components/settlements/AddSettlementModal'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return( 
  <Fragment>
    <AppNavbar />
    <div className='container'>
      <AddActionBtn />
      <AddPartnerModal />
      <EditPartnerModal />
      <AddSettlementModal />
      <Partners />
    </div>
  </Fragment>
);
};

export default App;