import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCurrentPage } from '../redux/actions'

const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg  ftco-navbar-light">
      <div className="container-xl">
        <Link to={"/donate"} className="btn-custom order-lg-last">donate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span>Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/services"}>Nkhangfi Travel</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/studyAbroad"}>Study Abroad</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/gallery"}>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/careers"}>Careers</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/team"}>Our Team</Link></li>
            <li className="nav-item"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  current_page: state.page,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPageNav: pg => {
    dispatch(updateCurrentPage(pg));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
