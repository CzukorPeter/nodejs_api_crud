import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSettlement } from '../../actions/settlementActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddSettlementModal = ({ addSettlement }) => {
    const [name, setName] = useState('');

    const onSubmit =() => {

        if(name === '') {
            M.toast({ html: 'Settlement name are required!'})
        } else{
            const newSettlement = {
                name
            }

            addSettlement(newSettlement);

            M.toast({ html: 'New settlement added!'})
            window.location.reload(false)

            //Clear Fields
            setName('');
        }     
    }

    return (
    <div id="add-settlement-modal" className='modal'>
        <div className='modal-content'>
            <h4>Add Settlement</h4>
            <div className='row'>
                <div className='row'>
                    <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}>
                    </input>
                    <label htmlFor='name' className='active'>
                        Settlement Name
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

AddSettlementModal.propTypes = {
    addSettlement: PropTypes.func.isRequired
  };

export default connect(null, { addSettlement })(AddSettlementModal);

