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
    const [tax_number, setTax_number] = useState('');
    const [company_reg_number, setCompany_reg_number] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [bank_account_number, setBank_account_number] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (current) {
            setName(current.name);
            setCompanyform(current.companyform_id);
            setSettlement(current.settlement_id);
            setTax_number(current.tax_number);
            setCompany_reg_number(current.company_reg_number);
            setAddress(current.address);
            setPhone_number(current.phone_number);
            setBank_account_number(current.bank_account_number);
            setComment(current.comment);
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
                tax_number,
                company_reg_number,
                settlement_id,
                address,
                phone_number,
                bank_account_number,
                comment
              };
        
              updatePartner(updPartner);
              M.toast({ html: 'Partner updated!' });
              window.location.reload(false)

            //Clear Fields
            setName('');
            setCompanyform('');
            setTax_number('');
            setCompany_reg_number('');
            setSettlement('');
            setAddress('');
            setPhone_number('');
            setBank_account_number('');
            setComment('');
        }     
    }

    return (
    <div id="edit-partner-modal" className='modal'>
        <div className='modal-content'>
            <h4 className='center'>Edit Partner Details</h4>
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
                <CompanyformSelectOptions/>              
                </select>
                <label>Choose your option</label>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='tax_number' value={tax_number} onChange={e => setTax_number(e.target.value)}>
                    </input>
                    <label htmlFor='tax_number' className='active'>
                    Tax number
                    </label>              
                </div>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='company_reg_number' value={company_reg_number} onChange={e => setCompany_reg_number(e.target.value)}>
                    </input>
                    <label htmlFor='company_reg_number' className='active'>
                    Company registration number
                    </label>              
                </div>
            </div>


            <div className='row'> 
                <select name='settlement' value={settlement_id} className='browser-default' onChange={e => setSettlement(e.target.value)}>                
                <option value="" disabled selected>Choose Settlement</option>
                <SettlementSelectOptions />              
                </select>
                <label>Choose your option</label>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='address' value={address} onChange={e => setAddress(e.target.value)}>
                    </input>
                    <label htmlFor='address' className='active'>
                    Address
                    </label>              
                </div>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='phone_number' value={phone_number} onChange={e => setPhone_number(e.target.value)}>
                    </input>
                    <label htmlFor='phone_number' className='active'>
                    Phone number
                    </label>              
                </div>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='bank_account_number' value={bank_account_number} onChange={e => setBank_account_number(e.target.value)}>
                    </input>
                    <label htmlFor='bank_account_number' className='active'>
                    Bank account number
                    </label>              
                </div>
            </div>

            <div className='row'>
                <div className='row'>
                    <input type="text" name='comment' value={comment} onChange={e => setComment(e.target.value)}>
                    </input>
                    <label htmlFor='comment' className='active'>
                    Comment
                    </label>              
                </div>
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