import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    const reduceCharge = () => {
        /* using ternary */
        charge === 0 ? setCharge(charge) : setCharge(charge - 10);
        /* using if else */
        // if (charge === 0) {
        //     return;
        // }
        // else {
        //     setCharge(charge - 10);
        // }
    };

    return (
        <div>
            <h1>Mobile Battery reduction challenge</h1>
            <h2>Battery Status : {charge}</h2>
            <button className='btn btn-warning' onClick={reduceCharge}>Decrease Battery</button>
        </div>
    );
};

export default Mobile;