import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SettlementSelectOptions from '../settlements/SettlementSelectOptions';
import CompanyformSelectOptions from '../companyforms/CompanyformSelectOptions';
import { addPartner } from '../../actions/partnerActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddPartnerModal = ({ addPartner }) => {
    const [name, setName] = useState('');
    const [companyform_id, setCompanyform] = useState('');
    const [settlement_id, setSettlement] = useState('');
/*     const [tax_number, setTax_number] = useState('');
    const [company_reg_number, setCompany_reg_number] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [bank_account_number, setBank_account_number] = useState('');
    const [comment, setComment] = useState(''); */

    const onSubmit =() => {
        
        if(name === '' || companyform_id ===''|| settlement_id ==='') {
            M.toast({ html: 'Partner name and company form are required!'})
        } else{
            const newPartner = {
                name,
                companyform_id,
                settlement_id
            }

            addPartner(newPartner);

            M.toast({ html: 'New Partner added!' })
            window.location.reload(false)

            //Clear Fields
            setName('');
            setCompanyform('');
            setSettlement('')
        }     
    }

    return (
    <div id="add-partner-modal" className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Add Partner</h4>
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
                <select name='companyform' value={companyform_id} className='browser-default' onChange={e => setCompanyform(e.target.value)}>                
                <option value="" disabled selected>Select Company Form</option>
                <CompanyformSelectOptions />             
                </select>
                <label>Choose your option</label>
            </div>
            <div className='row'> 
                <select name='settlement' value={settlement_id} className='browser-default' onChange={e => setSettlement(e.target.value)}>                
                <option value="" disabled selected>Select Settlement</option>
                <SettlementSelectOptions />              
                </select>
                <label>Choose your option</label>
            </div>



        </div>


        <div className='moda-footer'>
        <div className='row'>
        
        <button href='#!' onClick={onSubmit} className='modal-close waves-effect red waves-light btn'
        >Enter
        <i className="material-icons right">send</i>
        </button>
        
        <br></br>
        <br></br>
        <button href='#add-settlement-modal' onClick={onSubmit} className='modal-close waves-effect green waves-light btn modal-trigger'
        >Add New Settlement
        <i className="material-icons right">location_on</i>
        </button>        
        </div>
        </div>
    </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
  };

AddPartnerModal.propTypes = {
    addPartner: PropTypes.func.isRequired
  };

export default connect(null, { addPartner })(AddPartnerModal);
