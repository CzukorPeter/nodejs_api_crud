import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCompanyforms } from '../../actions/companyActions';

const CompanyformSelectOptions = ({ getCompanyforms, companyform: { companyforms, loading } }) => {
  useEffect(() => {
    getCompanyforms();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    companyforms !== null &&
    companyforms.map(c => (
      <option key={c.id} value={`${c.id}`}>
        {c.name}
      </option>
    ))
  );
};

CompanyformSelectOptions.propTypes = {
  companyform: PropTypes.object.isRequired,
  getCompanyforms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companyform: state.companyform
});

export default connect(
  mapStateToProps,
  { getCompanyforms }
)(CompanyformSelectOptions);