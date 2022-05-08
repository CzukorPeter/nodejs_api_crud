import React from "react";

const AddActionBtn = () => {
    return (
    <div className="fixed-action-btn">
        <a href="#!" className="btn-floating btn-large red lighten-2 model-trigger">
            <i className="material-icons">library_add</i>
        </a>
        <ul>
             <li>
                <a href="#add-settlement-modal" className="btn-floating green modal-trigger">
                    <i className="material-icons">location_on</i>
                </a>
            </li>
            <li>
                <a href="#add-partner-modal" className="btn-floating red modal-trigger">
                    <i className="material-icons">person_add</i>
                </a> 
            </li>

        </ul>

    </div>
    )
}

export default AddActionBtn
