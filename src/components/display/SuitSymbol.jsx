import React from 'react';
import { Suits } from '../../constants';

const SuitSymbol = ({ suit, style }) => {
    return (
        <div style={{
            position: 'absolute',
            width: 50,
            textAlign: 'center',
            ...style
        }}>{Suits[suit]}</div>
    );
}

export default SuitSymbol;
