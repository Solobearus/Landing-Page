import React, { Component } from 'react';
import style from './App.module.css'
import './App.module.css';
import Modal from './components/Modal/Modal.jsx'
import Logos from './components/Logos/Logos.jsx'
import video from './assets/travel-v2.mp4'

export class App extends Component {

    render() {
        return (
            <div className={style.App}>
                <video autoPlay muted loop className={style.myVideo}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <span className={style.content}>
                    <h1 className={style.h1}>DON'T PANIC! DON'T PANIC!</h1>
                    <h2 className={style.h2}>Cool stuff here! You've got to see it!</h2>
                    <Modal></Modal>
                    <Logos></Logos>
                </span>
            </div>
        );
    }
}

export default App;
