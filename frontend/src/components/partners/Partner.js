import React from "react";
import PropTypes from "prop-types";

const Partner = ({ partner }) => {
    return (  
        <tbody>
          <tr>
            <td>{partner.id}</td>
            <td><a href="#edit-partner-modal" className="red-text modal-trigger"><b>{partner.name}</b></a></td>
            <td>{partner.companyform}</td>
            <td>{partner.tax_number}</td>
            <td>{partner.company_reg_number}</td>
            <td>{partner.settlements}</td>
            <td>{partner.address}</td>
            <td>{partner.phone_number}</td>
            <td>{partner.bank_account_number}</td>
            <td>{partner.comment}</td>
            <td>
            <a href="!#" className="red-text">
            <i className="material-icons">delete</i>
            </a>
            </td>
            <td>
            <a href="#edit-partner-modal" className="green-text modal-trigger">
            <i className="material-icons">edit</i>
            </a>
            </td>
          </tr>
        </tbody>

    )
}

Partner.propTypes = {
    partner: PropTypes.object.isRequired,
}

export default Partner