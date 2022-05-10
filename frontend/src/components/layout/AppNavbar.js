import React, { useRef } from 'react';
import { connect } from 'react-redux';


const AppNavbar = ({ }) => {
      
     return (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
                <i className="material-icons ">assignment_ind</i>
                Partner Organizer
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">PartnersGroupBySettlements</a></li>
                <li><a href="#">PartnersGroupByCompanyForms</a></li>
            </ul>
        </div>
      </nav>
    )
}

  
export default connect(null,{ })(AppNavbar);