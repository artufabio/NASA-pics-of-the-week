import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export const Scroll = (props) =>{
    return (
        <div style={{ overflowY:'auto', border:'1px solid black', height:'85vh'}}>
            <Scrollbars autoHide thumbSize={300}>
                { props.children }
            </Scrollbars>
        </div>
    )
}