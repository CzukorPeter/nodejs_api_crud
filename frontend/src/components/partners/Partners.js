import React, { useState, useEffect } from "react";
import Partner  from "./Partner";

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

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
    <div className="">
        <h4 className="center">Partners</h4>
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
}

export default Partners