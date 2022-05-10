import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchPartners } from "../../actions/partnerActions";


const AppNavbar = ({ searchPartners }) => {
        const text = useRef('');
      
        const onChange = e => {
        searchPartners(text.current.value);
        };

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

        <div class="nav-wrapper">
        <nav style={{ marginBottom: '30px' }} className='red red lighten-3'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
          <input
              id='search'
              type='search'
              placeholder='Search ...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
    </div>
      </nav>
    )
}


AppNavbar.propTypes = {
    searchPartners: PropTypes.func.isRequired
  };
  
export default connect(null,{ searchPartners })(AppNavbar);