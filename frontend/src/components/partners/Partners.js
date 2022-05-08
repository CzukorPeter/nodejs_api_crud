import React, { useState, useEffect } from "react";
import Partner  from "./Partner";
import Preloader from "../layout/Preloader";
import * as XLSX from "xlsx";

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPartners();

    },[]);

    const getPartners = async () => {
        setLoading(true);
        const res = await fetch('/partners');
        const data = await res.json();

        setPartners(data);
        setLoading(false);
    }


    const handleOnExport = () => {
        console.log(partners)

        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(partners);
        XLSX.utils.book_append_sheet(wb, ws, "PartnersSheet");
        XLSX.writeFile(wb, "Partners.xlsx")
    };

    if(loading) {
        return <Preloader/>;
    }

    return (
    <div className="">
        <h4 className="center">Partners</h4>

        <button onClick={handleOnExport} className='modal-close waves-effect green lighten-2 waves-light btn'
        >Export to Xlsx
        <i class="material-icons right">cloud_download</i>
        </button>
        <table className="centered">
        <thead>
          <tr>
              <th>#Id</th>
              <th>Name</th>
              <th>Company form</th>
              <th>Tax number</th>
              <th>Company registration number</th>
              <th>Settlement</th>
              <th>Adress</th>
              <th>Phone number</th>
              <th>Bank account number</th>
              <th>Comment</th>
          </tr>
        </thead>
        {! loading && partners.length === 0 ? (<p className="cente">No partners in the database...</p>) : (
            partners.map(partner => <Partner partner={partner} key={partner.id} />)
        )}
              </table>

    </div>
    )
};

export default Partners