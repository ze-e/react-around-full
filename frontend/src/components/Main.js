import React from 'react';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

import defaultAvatar from '../images/profile-img.png';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  return (
  <>
  <section className="profile">
    <div className="profile__image-container">
      <div className="profile__image-overlay" onClick={props.onEditAvatar}></div>
      <img className="profile__image" src={currentUser.avatar ? currentUser.avatar : defaultAvatar} alt="profile-img"/>
    </div>
    <div className="profile__info">
  <h1 className="profile__name">{currentUser.name ? currentUser.name : 'Jacques Cousteau' }</h1>
      <button className="profile__edit-button" onClick={props.onEditProfile} aria-label="edit profile"></button>       
  <p className="profile__description">{currentUser.about ? currentUser.about : 'Explorer'}</p>     
    </div>
    <button className="profile__add-button" onClick={props.onAddPlace}></button>
  </section>

  <section className="elements">
    {props.cards.length > 0 ?
     props.cards.map(card => (
      <div className="element" key={card._id}>
        <Card card={card} onCardClick = {props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
      </div>
    ))
    
    :
    //show loading screen if cards haven't loaded
    <div className="loading">Add your first place with the + button!</div>
    }
  </section>
  </>
)}

export default Main;