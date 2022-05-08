import React, { useState, useEffect } from "react";

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
    <ul className="collection with-header">
        <li className="collection-header">
            <h4 className="center">Partners</h4>
        </li>
        {! loading && partners.length === 0 ? (<p className="cente">No partners in the database...</p>) : (
            partners.map(partner => <li>{partner.name}</li>)
        )}

    </ul>
    )
}

export default Partners