import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deletePartner, setCurrent } from '../../actions/partnerActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Partner = ({ partner, deletePartner, setCurrent }) => {
  const onDelete = () => {
    deletePartner(partner.id);
    M.toast({ html: 'Partner deleted!' });
  }



    return (
          <tbody>
          <tr>
            <td>{partner.id}</td>
            <td><a href="#edit-partner-modal" className="red-text modal-trigger"
              onClick={() => setCurrent(partner)}
            ><b>{partner.name}</b></a></td>
            <td>{partner.companyform}</td>
            <td>{partner.tax_number}</td>
            <td>{partner.company_reg_number}</td>
            <td>{partner.settlements}</td>
            <td>{partner.address}</td>
            <td>{partner.phone_number}</td>
            <td>{partner.bank_account_number}</td>
            <td>{partner.comment}</td>
            <td>
            <a href="#!" onClick={onDelete} className="red-text">
            <i className="material-icons">delete</i>
            </a>
            </td>
            <td>
            <a href="#edit-partner-modal" className="green-text modal-trigger">
            <i className="material-icons"
              onClick={() => setCurrent(partner)}
            >edit</i>
            </a>
            </td>
          </tr>
        </tbody>

    )
}

Partner.propTypes = {
    partner: PropTypes.object.isRequired,
    deletePartner: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deletePartner, setCurrent })(Partner);