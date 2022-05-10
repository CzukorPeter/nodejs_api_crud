import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const SettlementItem = ({ settlement: { name } }) => {

  return (
    <li className='collection-item'>
      <div>
        {name}
      </div>
    </li>
  );
};

SettlementItem.propTypes = {
  settlement: PropTypes.object.isRequired,

};

export default SettlementItem;