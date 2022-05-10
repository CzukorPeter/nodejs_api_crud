import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SettlementSelectOptions from '../settlements/SettlementSelectOptions';
import CompanyformSelectOptions from '../companyforms/CompanyformSelectOptions';
import PropTypes from 'prop-types';
import { updatePartner } from '../../actions/partnerActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditPartnerModal = ({ current, updatePartner }) => {
    const [name, setName] = useState('');
    const [companyform_id, setCompanyform] = useState('');
    const [settlement_id, setSettlement] = useState('');
/*     const [tax_number, setTax_number] = useState('');
    const [company_reg_number, setCompany_reg_number] = useState('');
    const [settlements, setSettlements] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [bank_account_number, setBank_account_number] = useState('');
    const [comment, setComment] = useState(''); */

    useEffect(() => {
        if (current) {
            setName(current.name);
            setCompanyform(current.companyform_id);
            setSettlement(current.settlement_id);
        }
      }, [current]);

    const onSubmit =() => {
        if(name === '' || companyform_id ==='' || settlement_id==='') {
            M.toast({ html: 'Partner name and company form are required!'})
        } else{

            const updPartner = {
                id: current.id,
                name,
                companyform_id,
                settlement_id,
              };
        
              updatePartner(updPartner);
              M.toast({ html: 'Partner updated ' });
              window.location.reload(false)

            //Clear Fields
            setName('');
            setCompanyform('');
            setSettlement('');
        }     
    }

    return (
    <div id="edit-partner-modal" className='modal'>
        <div className='modal-content'>
            <h4>Edit Partner</h4>
            <div className='row'>
                <div className='row'>
                    <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}>
                    </input>
                    <label htmlFor='name' className='active'>
                        Partner Name
                    </label>              
                </div>
            </div>

            <div className='row'> 
                <select name='companyform_id' value={companyform_id} className='browser-default' onChange={e => setCompanyform(parseFloat(e.target.value))}>                
                <option value="" disabled selected>Choose Company Form</option>
                <SettlementSelectOptions />              
                </select>
                <label>Choose your option</label>
            </div>


            <div className='row'> 
                <select name='settlement' value={settlement_id} className='browser-default' onChange={e => setSettlement(e.target.value)}>                
                <option value="" disabled selected>Choose Settlement</option>
                <SettlementSelectOptions />              
                </select>
                <label>Choose your option</label>
            </div>



        </div>
        <div className='moda-footer'>
        <div className='row'>
        <div className="col s3">
        <button href='#!' onClick={onSubmit} className='modal-close waves-effect red waves-light btn'
        >Enter
        <i className="material-icons right">send</i>
        </button>
        </div>
        <div className="col s5">
        <button href='#add-settlement-modal' onClick={onSubmit} className='modal-close waves-effect green waves-light btn modal-trigger'
        >Add New Settlement
        <i className="material-icons right">location_on</i>
        </button>
        </div>
        </div>
        </div>
    </div>
    )
}

EditPartnerModal.propTypes = {
    current: PropTypes.object,
    updatePartner: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    current: state.partner.current
  });
  
  export default connect(mapStateToProps,{ updatePartner })(EditPartnerModal);