import React from 'react';
import picture from './assets/logo800.jpeg';
import TopNavBar from './components/TopNavBar';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={picture} className="App-logo" alt="logo"/>
            </header>
            <TopNavBar/>
            <header className="App-body">
                Coming Soon!!
            </header>
        </div>
    );
}

export default App;
