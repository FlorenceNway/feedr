import React from 'react';
import './App.css';
import { QtyProvider } from './components/context/QtyContext';
import Header from './components/header/Header';
import Menu from './components/pages/Menu';


const App = () => (
    <QtyProvider>
        <div className="wrapper">
            <Header/>
            <Menu/>
        </div>
    </QtyProvider> 
);

export default App;