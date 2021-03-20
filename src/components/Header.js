import React from 'react';
import { updateCurrentPage } from '../redux/actions'
import { connect } from 'react-redux';

const Header = props => {
  console.log(props.current_page);

  return (
  <header>
    <p>heading</p>
    <button type="button" onClick={() => props.updateCurrentPageNav('home')}>change to travel</button>
  </header>);
};

const mapStateToProps = state => ({
  current_page: state.page,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPageNav: pg => {
    dispatch(updateCurrentPage(pg));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
