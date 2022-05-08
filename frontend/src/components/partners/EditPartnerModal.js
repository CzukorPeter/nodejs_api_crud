import React, { useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditPartnerModal = () => {
    const [name, setName] = useState('');
    const [companyform, setCompanyform] = useState('');
/*     const [tax_number, setTax_number] = useState('');
    const [company_reg_number, setCompany_reg_number] = useState('');
    const [settlements, setSettlements] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [bank_account_number, setBank_account_number] = useState('');
    const [comment, setComment] = useState(''); */

    const onSubmit =() => {
        //kotelezo adatok validalas???
        if(name === '' || companyform ==='') {
            M.toast({ html: 'Partner name and company form are required!'})
        } else{
            console.log(name, companyform);

            //Clear Fields
            setName('');
            setCompanyform('');
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
                
 
                <select name='companyform' value={companyform} className='browser-default' onChange={e => setCompanyform(e.target.value)}>
                
                <option value="" disabled selected>Select Company Form</option>
                <option value="1">Vállalat</option>
                <option value="2">Korlátolt felelősségű társaság</option>
                <option value="3">Betéti társaság</option>
                
                </select>
                <label>Choose your option</label>
            </div>
        </div>
        <div className='moda-footer'>
        <div className='row'>
        <div class="col s3">
        <button href='#!' onClick={onSubmit} className='modal-close waves-effect red waves-light btn'
        >Enter
        <i class="material-icons right">send</i>
        </button>
        </div>
        <div class="col s5">
        <button href='#add-settlement-modal' onClick={onSubmit} className='modal-close waves-effect green waves-light btn modal-trigger'
        >Add New Settlement
        <i class="material-icons right">location_on</i>
        </button>
        </div>
        </div>
        </div>
    </div>
    )
}



export default EditPartnerModal