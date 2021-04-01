import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Header from '../components/Header';
import Donate from '../pages/Donate';
import NkhangfiTravel from '../pages/NkhangfiTravel';
import StudyAbroad from '../pages/StudyAbroad';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import StudyAbroadSingle from '../pages/StudyAbroadSingle';
import ServicePage from '../pages/ServicesSingle';
import EventSingle from '../pages/EventSingle';
import Footer from '../components/Footer';
import UnderConstruction from '../pages/UnderConstruction';
import '../css/style.css';
import '../css/flaticon.css';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/services/overview" component={NkhangfiTravel} />
      <Route exact path="/studyAbroad/overview" component={StudyAbroad} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/event/overview" component={Event} />
      <Route exact path="/event/:id" component={EventSingle} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/studyAbroad/:id" component={StudyAbroadSingle} />
      <Route exact path="/services/:id" component={ServicePage} />
      <Route exact path="/503" component={UnderConstruction} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
