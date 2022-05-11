import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SettlementItem from './SettlementItem';
import { getSettlements } from '../../actions/settlementActions';


const SettlementListModal = ({ settlement: { settlements, loading }, getSettlements }) => {
  useEffect(() => {
    getSettlements();
  }, []);



  return (
    <div id="list-settlement-modal" className='modal'>

      <div className='modal-content'>
        <h4>Settlements List</h4>
        <ul className='collection'>
          {!loading &&
            settlements !== null &&
            settlements.map(settlement => <SettlementItem settlement={settlement} key={settlement.id} />)}
        </ul> 
      </div>
    </div>
  );
};

SettlementListModal.propTypes = {
  settlement: PropTypes.object.isRequired,
  getSettlements: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  settlement: state.settlement
});

export default connect(
  mapStateToProps,
  { getSettlements }
)(SettlementListModal);