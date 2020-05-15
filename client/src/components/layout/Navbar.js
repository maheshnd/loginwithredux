import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../action/authAction';

const Navbar = ({ isAdmin, userName, isAuthenticated, logout }) => {
  const guestUser = (
    <Fragment>
      <li className='nav-item active'>
        <Link to='/login' className='nav-link' href='#'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  const adminLink = (
    <Fragment>
      <li className='nav-item '>
        <Link to='/' className='nav-link' href='#'>
          HR
        </Link>
      </li>
      <Link to='/finance' className='nav-item'>
        <Link to='/finance' className='nav-link' href='#'>
          Finance
        </Link>
      </Link>
      <li className='nav-item'>
        <a className='nav-link disabled' href='!#'>
          Inventory
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' href='!#'>
          Setting
        </a>
      </li>

      <li class='nav-item  ml-5'>
        <Link class='nav-link' onClick={logout}>
          {`${userName}`} <i className='fas fa-sign-out-alt' />
        </Link>
      </li>
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      <li className='nav-item '>
        <Link to='/' className='nav-link' href='#'>
          HR
        </Link>
      </li>

      <li className='nav-item'>
        <a className='nav-link disabled' href='!#'>
          Inventory
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' href='!#'>
          Setting
        </a>
      </li>
      <li class='nav-item  ml-5'>
        <Link class='nav-link' onClick={logout}>
          {`${userName}`} <i className='fas fa-sign-out-alt' />
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <uxl className='navbar-nav'>
            {!isAuthenticated
              ? guestUser
              : isAdmin === 0
              ? adminLink
              : userLinks}
          </uxl>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin,
  userName: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
