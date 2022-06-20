import React from 'react';

const Pets = (props) => {
    return (
        <div>
            <span>{props.wish}</span>
            <span>{props.name}</span>
            <span>{props.symbol}</span>
        </div>
    )
  };
export default Pets;  