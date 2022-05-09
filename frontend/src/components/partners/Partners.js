import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Partner  from "./Partner";
import Preloader from "../layout/Preloader";
import PropTypes from 'prop-types';
import { getPartners } from "../../actions/partnerActions";

import * as XLSX from "xlsx";


const Partners = ({ partner: { partners, loading }, getPartners }) => {
    useEffect(() => {
        getPartners();
      // eslint-disable-next-line
    }, []);


    if (loading || partners === null) {
        return <Preloader />;
      }

    const handleOnExport = () => {
        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(partners);
        XLSX.utils.book_append_sheet(wb, ws, "PartnersSheet");
        XLSX.writeFile(wb, "Partners.xlsx")
    };

    return (
    <div className="container">
        <h4 className="center">Partners</h4>

        <button onClick={handleOnExport} className='modal-close waves-effect green lighten-2 waves-light btn'
        >Export to Xlsx
        <i class="material-icons right">cloud_download</i>
        </button>
        <table className="centered responsive-table">
        <thead>
          <tr>
              <th>#Id</th>
              <th>Name</th>
              <th>Company form</th>
              <th>Tax number</th>
              <th>Company registration number</th>
              <th>Settlement</th>
              <th>Adress</th>
              <th>Phone number</th>
              <th>Bank account number</th>
              <th>Comment</th>
          </tr>
        </thead>
        {! loading && partners.length === 0 ? (<p className="cente">No partners in the database...</p>) : (
            partners.map(partner => <Partner partner={partner} key={partner.id} />)
        )}
              </table>

    </div>
    )
};


Partners.propTypes = {
    partner: PropTypes.object.isRequired,
    getPartners: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    partner: state.partner
  });

export default connect(
    mapStateToProps,
    { getPartners }
  )(Partners);