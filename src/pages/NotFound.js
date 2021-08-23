import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
  return (<div>
    <div className="text-center container p-5">
        <h1><i className="fas fa-tools mr-2"></i>404</h1>
        <p>Hmm, the page you were looking for doesn't seem to exist anymore.</p>
        <div><Link to="/">Go Home</Link></div>
      </div>
    <Footer />
  </div>);
};

export default NotFound;