import React from 'react';
import './ImageContainer.css';
import {Card} from '../card/Card';

export const ImageContainer = props => {
    return (
            <div className='container'>
                {props.pictures.map(pic => <Card key={pic.date} pic={pic} />)}
            </div>
    );
}
