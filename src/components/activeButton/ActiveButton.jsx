import React from 'react';
import './ActiveButton.css';

export const ActiveButton = ({ children, handleClick}) => {
    return(
        <div className='btnContainer'>
            <button
                className='slide'
                onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}