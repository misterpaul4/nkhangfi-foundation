import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = props => {
  return(
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl">
        <Link to={"/donate"} className="btn-custom order-lg-last">donate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span>Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link nav-home" to={"/"}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link nav-travel" to={"/services"}>Nkhangfi Travel</Link></li>
            <li className="nav-item"><Link className="nav-link nav-study" to={"/studyAbroad/overview"}>Study Abroad</Link></li>
            <li className="nav-item"><Link className="nav-link nav-gallery" to={"/gallery"}>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link nav-event" to={"/event/:id"}>Event</Link></li>
            <li className="nav-item"><Link className="nav-link nav-team" to={"/team"}>Our Team</Link></li>
            <li className="nav-item"><Link className="nav-link nav-contact" to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  current_page: state.page,
});

// const mapDispatchToProps = dispatch => ({
//   updateCurrentPageNav: pg => {
//     dispatch(updateCurrentPage(pg));
//   },
// });

export default connect(mapStateToProps)(Nav);
