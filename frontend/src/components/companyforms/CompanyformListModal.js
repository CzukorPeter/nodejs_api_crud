import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyformItem from './CompanyformItem';
import { getCompanyforms } from '../../actions/companyActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const CompanyformListModal = ({ companyform: { companyforms, loading }, getCompanyforms }) => {
  useEffect(() => {
    getCompanyforms();
    // eslint-disable-next-line
  }, []);



  return (
    <div id="list-companyform-modal" className='modal'>

      <div className='modal-content'>
        <h4>Company Forms List</h4>
        <ul className='collection'>
          {!loading &&
            companyforms !== null &&
            companyforms.map(companyform => <CompanyformItem companyform={companyform} key={companyform.id} />)}
        </ul> 
      </div>
    </div>
  );
};

CompanyformListModal.propTypes = {
  companyform: PropTypes.object.isRequired,
  getCompanyforms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companyform: state.companyform
});

export default connect(
  mapStateToProps,
  { getCompanyforms }
)(CompanyformListModal);