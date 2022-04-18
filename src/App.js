import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Switch, Route, Redirect } from "react-router-dom";
import Artist from './components/Artist/Artist';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path={'/profile'} component={Profile} />
            <Route path={'/dialogs'} component={Dialogs} />
            <Route path={'/artist'} component={Artist} />
            <Route path={'/music'} component={Music} />
            <Route path={'/settings'} component={Settings} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App 