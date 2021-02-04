import Loader from 'react-loader-spinner';
import React from 'react';

export default function Spinner({type, color, width, height}) {
    return (
        <Loader
            type={type}
            color={color}
            width={width}
            height={height}        
        />
    );
}

