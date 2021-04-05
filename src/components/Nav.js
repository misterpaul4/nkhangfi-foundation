import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/nav.css';

const Nav = () => {
  const [showMenu, toggle] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      toggle(false);
    } else {
      toggle(true);
    }
  }

  return(
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl">
        <Link to={"/503"} className="btn-custom order-lg-last">donate</Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="fa fa-bars"></span>Menu
        </button>
        {/* set display to block on mobile */}
        <div className={showMenu ? "collapse navbar-collapse d-block" : "collapse navbar-collapse d-none"} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-home" to={"/"}>Home</Link></li>
            <li className="nav-item">
              <Dropdown className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="nav-link nav-services nav-dropdown text-capitalize b-0 p-0 pt-1">
                  Nkhangfi Travel
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-dropdown-items">
                  <Dropdown.Item><Link to={"/503"} className="nav-travel navbar-dropdown-links">overview</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/services/visa"} className="navbar-dropdown-links">visa processing</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">flight reservation</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/services/tours"} className="navbar-dropdown-links">tour packages</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">work & travel</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">hotel reservation & airport pickup</Link></Dropdown.Item>
                  <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">document translation</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {/* <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-travel" to={"/services/overview"}>Nkhangfi Travel</Link></li> */}
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-study" to={"/503"}>Study Abroad</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-gallery" to={"/503"}>Gallery</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-event" to={"/event/overview"}>Event</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-team" to={"/503"}>Our Team</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-contact" to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// const mapStateToProps = state => ({
//   current_page: state.page,
// });

// const mapDispatchToProps = dispatch => ({
//   updateCurrentPageNav: pg => {
//     dispatch(updateCurrentPage(pg));
//   },
// });

// export default connect(mapStateToProps)(Nav);

export default Nav;
