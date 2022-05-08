import React, { useState, useEffect } from "react";

const Partners = () => {
    const [partners, setPartners] = useState([]);
    cosnt [loding, setLoading] = useState([false]);

    const getPartners = async () => {
        setLoading(true);
        const res = await fetch('/partners')
    }

    return (
    <div>   

    </div>
    )
}

export default Partners