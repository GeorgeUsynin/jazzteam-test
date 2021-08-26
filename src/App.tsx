import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Container} from '@material-ui/core';
import {Route} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Profile} from './components/Profile/Profile';
import {Info} from './components/Info/Info';

export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    INFO: '/info',
}


function App() {
    return (
        <Container maxWidth="lg" className="App">
            <Header/>
            <div>
                <Route exact path={PATH.HOME} render={()=><div>Home</div>}/>
                <Route path={PATH.LOGIN} render={()=><Login/>}/>
                <Route path={PATH.PROFILE} render={()=><Profile/>}/>
                <Route path={PATH.INFO} render={()=><Info/>}/>
            </div>
        </Container>
    );
}

export default App;
