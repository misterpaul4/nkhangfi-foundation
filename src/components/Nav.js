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
        <Link to={"/donate"} className="btn-custom order-lg-last">donate</Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="fa fa-bars"></span>Menu
        </button>
        {/* set display to block on mobile */}
        <div className={showMenu ? "collapse navbar-collapse d-block" : "collapse navbar-collapse d-none"} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-home" to={"/"}>Home</Link></li>
            <li className="nav-item">
              <Dropdown drop={"top"} className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="nav-link nav-services nav-dropdown text-capitalize b-0 p-0 pt-1">
                  Nkhangfi Travel
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-dropdown-items">
                  {/* <Dropdown.Item><Link to={"/503"} className="nav-travel navbar-dropdown-links">overview</Link></Dropdown.Item> */}
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/services/visa"} className="navbar-dropdown-links">visa processing</Dropdown.Item>
                  {/* <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">flight reservation</Link></Dropdown.Item> */}
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/services/tours"} className="navbar-dropdown-links">tour packages</Dropdown.Item>
                  {/* <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">work & travel</Link></Dropdown.Item> */}
                  {/* <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">hotel reservation & airport pickup</Link></Dropdown.Item> */}
                  {/* <Dropdown.Item><Link to={"/503"} className="navbar-dropdown-links">document translation</Link></Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {/* <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-travel" to={"/services/overview"}>Nkhangfi Travel</Link></li> */}
            {/* <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-study" to={"/503"}>Study Abroad</Link></li> */}
            <li className="nav-item">
              <Dropdown drop={"top"} className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="nav-link nav-services nav-dropdown text-capitalize b-0 p-0 pt-1">
                  Study Abroad
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-dropdown-items">
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/australia"} className="navbar-dropdown-links">Australia</Dropdown.Item>
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/belarus"} className="navbar-dropdown-links">Belarus</Dropdown.Item>
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/china"} className="navbar-dropdown-links">China</Dropdown.Item>
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/cyprus"} className="navbar-dropdown-links">Cyprus</Dropdown.Item>
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/poland"} className="navbar-dropdown-links">Poland</Dropdown.Item>
                  <Dropdown.Item onClick={toggleMenu} as={Link} to={"/studyAbroad/ukraine"} className="navbar-dropdown-links">Ukraine</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-gallery" to={"/gallery"}>Gallery</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-event" to={"/event/overview"}>Event</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-team" to={"/team"}>Our Team</Link></li>
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
