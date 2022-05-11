import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSettlements } from '../../actions/settlementActions';

const SettlementSelectOptions = ({ getSettlements, settlement: { settlements, loading } }) => {
  useEffect(() => {
    getSettlements();
  }, []);

  return (
    !loading &&
    settlements !== null &&
    settlements.map(s => (
      <option key={s.id} value={`${s.id}`}>
        {s.name}
      </option>
    ))
  );
};

SettlementSelectOptions.propTypes = {
  settlement: PropTypes.object.isRequired,
  getSettlements: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    settlement: state.settlement
});

export default connect(
  mapStateToProps,
  { getSettlements }
)(SettlementSelectOptions);