import React, { useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const addCompanyformModal = () => {
    const [name, setName] = useState('');

    const onSubmit =() => {
        //kotelezo adatok validalas???
        if(name === '') {
            M.toast({ html: 'Company form name are required!'})
        } else{

            //Clear Fields
            setName('');
        }     
    }

    return (
    <div id="add-companyform-modal" className='modal'>
        <div className='modal-content'>
            <h4>Add Company form</h4>
            <div className='row'>
                <div className='row'>
                    <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}>
                    </input>
                    <label htmlFor='name' className='active'>
                        Company form Name
                    </label>              
                </div>
            </div>
        </div>
        <div className='moda-footer'>
        <button href='#' onClick={onSubmit} className='modal-close waves-effect green waves-light btn'
        >Enter
        <i className="material-icons right">send</i>
        </button>
        </div>
    </div>
    )
}

export default addCompanyformModal