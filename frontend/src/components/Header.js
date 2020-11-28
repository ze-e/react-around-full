import React from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  const [currentLocation, setLocation] = React.useState('login');
  const [showMenu, setShowMenu] = React.useState(false);

  function logOutUser(){
    props.login(false);
    setShowMenu(false);
  }

  function handleShowMenu(){
    setShowMenu(!showMenu);
  }

  //change the display depending on the current page. Default is signin page
  //what to display is determined in the return statement
  React.useEffect(() => {
    if(location.pathname === '/signup') { 
      setLocation('signup');
    }
    else if(location.pathname === '/login'){
      setLocation('login');
    }
  }, [location]);
  
  return (
    <header className={`header ${!props.loggedIn && 'header_state_loggedOut'}`}>
      <div className="header__logo-menu">
        <img className="header__logo" src={logo} alt="logo" />
        {props.loggedIn && <button className={`header__menu-icon ${showMenu  && 'header__menu-icon_state_closed'}`} type="button" onClick={handleShowMenu}></button>}
      </div>
      <nav className={`header__nav ${(!showMenu && props.loggedIn) && 'header__nav_state_closed'}`}>
        {props.loggedIn ? 
        //logged in
        <><p className="header__email">{currentUser.email}</p>
        <button className="header__link_type_logout" type="button" onClick={logOutUser}>Log out</button></> : 
        //logged out
        currentLocation === 'login' ? 
          //login header
          <Link to="./signup" className="header__link">Sign up</Link>: 
          //signup header
          <Link to="./login" className="header__link">Log in</Link>}
      </nav>
    </header>
  )}

export default withRouter(Header);