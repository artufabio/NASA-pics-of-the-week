import React, { Component } from 'react';
import {ImageContainer} from './components/imageContainer/ImageContainer';
import {Scroll} from './components/scroll/Scroll';
import {ReactComponent as Rocket} from './rocket1.svg';
import {ErrorBoundary} from './components/errorBoundary/ErrorBoundary';
import {ActiveButton} from './components/activeButton/ActiveButton';
import './App.css';


// 7 days ago date
let date = new Date();
date.setDate(date.getDate() - 6);         // 7 days ago date
date = date.toISOString().slice(0,10);    // ISO format yyyy-mm-dd


class App extends Component {

    constructor(){
        super();

        this.state = {
            pictures: [],
            textButton: 'most recent'
        }
    }

    // I request the last 7 pictures of the day from Nasa API
    componentDidMount(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${date}`)
        .then(response =>response.json())
        .then(photos => this.setState({ pictures: photos}))
        .catch(error => console.log(error))
    }

    displayPictures = () => {
        this.setState({pictures: this.state.pictures.reverse()});
        this.setState({textButton: (this.state.textButton === 'most recent')? 'oldest' : 'most recent'});
    }

    render() {

        const { pictures, textButton } = this.state;

        return ( pictures.length === 0 ) ?   //ternary operator
            (
                <div className="loader">
                    <Rocket />
                </div>
            )
             :
            (
                <div className='main-container'>
                    <div className='title'>
                        <h1>NASA Pics of the Week</h1>
                    </div>
                    <Scroll>
                        <ActiveButton handleClick={this.displayPictures}>
                            {`Display ${textButton} pictures at the top`}
                        </ActiveButton>
                        <ErrorBoundary>
                            <ImageContainer  pictures={pictures} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
        ) 
    }
}

export default App;