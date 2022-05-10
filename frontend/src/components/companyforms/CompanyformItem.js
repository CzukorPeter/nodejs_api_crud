import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const CompanyformItem = ({ companyform: { name } }) => {

  return (
    <li className='collection-item'>
      <div>
        {name}
      </div>
    </li>
  );
};

CompanyformItem.propTypes = {
  companyform: PropTypes.object.isRequired,

};

export default CompanyformItem;