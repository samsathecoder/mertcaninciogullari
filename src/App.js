import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; 

import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;