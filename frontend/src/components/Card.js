import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
function Card(props){
  
  const [isLiked, setIsLiked] = React.useState(false);
  const [isOwn, setIsOwn] = React.useState(false);
  const [likesLength, setlikesLength] = React.useState(0);

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  } 

  function handleLike() {
    props.onCardLike(props.card);
  } 

  function handleDelete() {
    props.onCardDelete(props.card);
  } 

  //control delete button visibility
  React.useEffect(() => {
    if(props.card.owner){
      props.card.owner === currentUser._id ? setIsOwn(true) : setIsOwn(false);
    }
  },[props.card])
  //const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn && 'element__delete-button_visibility_visible'}`
  ); 

  //check if card was already liked
  React.useEffect(() => {
    if(props.card.likes){
      props.card.likes.some(i => i === currentUser._id) ? setIsLiked(true) : setIsLiked(false);
    }
  },[props.card])
  //const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like-button ${isLiked && 'element__like-button_stateliked'}`; 

  //get number of likes
  React.useEffect(() => {
    if(props.card.likes){
      setlikesLength(props.card.likes.length);
    }
  },[props.card])

  return(
  <>
  <div className={cardDeleteButtonClassName} onClick={handleDelete} ></div>
  <img className="element__image" src={props.card.link} onClick={handleClick} alt="place"/>
  <div className="element__text">
    <h2 className="element__title">{props.card.name}</h2>
    <div className="element__likes-container">
      <button className={cardLikeButtonClassName} onClick={handleLike}></button>
      <p className="element__likes-display">{likesLength}</p>
    </div>
  </div>
  </>
  )
}

export default Card;