import React from 'react';
import './Card.css'

export const Card = props => {
    return(
        <div className='card'>
            {/* <img src="https://images.unsplash.com/photo-1614486109039-a8f3dc411201?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="NatGeo pic of the day"/>
            <div>
                
                <h5>Date</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit officiis, facere expedita voluptate sint saepe dicta dolorem alias explicabo perferendis voluptatibus ipsam quaerat culpa veritatis? Doloribus cum odio nesciunt! Quasi?</p>
            </div> */}
            <a href={props.pic.hdurl} target='_blank' rel='noreferrer' title='Open Full Image'>
                <img src={props.pic.url} alt={props.pic.title}/>
            </a>
            <h3>{props.pic.title}</h3>
            <h5>{props.pic.date}</h5>
            <p>{props.pic.explanation}</p>
        </div>
    )
}
