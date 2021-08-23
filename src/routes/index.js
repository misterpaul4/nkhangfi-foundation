import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
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
import UnderConstruction from '../pages/UnderConstruction';
import FAQ from '../pages/FAQ';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopBtn from '../components/ScrollTopButton';
import PopUp from '../components/PopUp';
import preference from '../preference';
import NotFound from '../pages/NotFound';
import '../css/style.css';
import '../css/flaticon.css';

const Routes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <ScrollToTopBtn />
    { preference.displayPopUp ? <PopUp /> : "" }
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
      <Route exact path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
