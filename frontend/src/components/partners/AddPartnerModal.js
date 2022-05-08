import React, { useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddPartnerModal = () => {
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
        }     
    }

    return (
    <div id='add-partner-modal' className='modal'>
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
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect red waves-light btn'
        >
        Enter
        </a>
        </div>
    </div>
    )
}



export default AddPartnerModal