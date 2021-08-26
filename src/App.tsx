import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Route} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Profile} from './components/Profile/Profile';
import {Info} from './components/Info/Info';
import {Home} from './components/Home/Home';

export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    INFO: '/info',
}

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="MainContainer">
                <Route exact path={PATH.HOME} render={()=><Home/>}/>
                <Route path={PATH.LOGIN} render={()=><Login/>}/>
                <Route path={PATH.PROFILE} render={()=><Profile/>}/>
                <Route path={PATH.INFO} render={()=><Info/>}/>
            </div>
        </div>
    );
}

export default App;
