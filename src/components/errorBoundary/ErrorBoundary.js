import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(){
        this.setState({ hasError: true})
    }

    render(){
        if (this.state.hasError) {
            return (
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height: '80vh', textAlign:'justify', margin:'0 20px'}}>
                    <h2>Ops.. We have had too many requests today!!!.. Please try again tomorrow!</h2>
                </div>
            )    
        } else {
            return this.props.children
        }
    }
}