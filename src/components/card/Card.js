import React from 'react';
import './Card.css'

export const Card = props => {
    return(
        <div className='card'>
            <a href={props.pic.hdurl} target='_blank' rel='noreferrer' title='Open Full Image'>
                <img src={props.pic.url} alt={props.pic.title}/>
            </a>
            <h3>{props.pic.title}</h3>
            <h5>{props.pic.date}</h5>
            <p>{props.pic.explanation}</p>
        </div>
    )
}
