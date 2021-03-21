import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Header from '../components/Header';
import Donate from '../pages/Donate';
import NkhangfiTravel from '../pages/NkhangfiTravel';
import StudyAbroad from '../pages/StudyAbroad';
import Gallery from '../pages/Gallery';
import Careers from '../pages/Careers';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import '../css/style.css';
import '../css/flaticon.css';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/services" component={NkhangfiTravel} />
      <Route exact path="/studyAbroad" component={StudyAbroad} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
