import React from 'react';
import { connect } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';

// const Header = ({ user }) => {
const Header = ({ currentUser: user }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Vidly
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/customers'>
            Cusomters
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/login'>
                Login
              </NavLink>
              <NavLink className='nav-item nav-link' to='/register'>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/profile'>
                {user.name}
              </NavLink>
              <NavLink className='nav-item nav-link' to='/logout'>
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
