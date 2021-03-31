import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

  console.log(showMenu);

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
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-travel" to={"/services/overview"}>Nkhangfi Travel</Link></li>
            <li className="nav-item" onClick={toggleMenu}><Link className="nav-link nav-study" to={"/studyAbroad/overview"}>Study Abroad</Link></li>
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
