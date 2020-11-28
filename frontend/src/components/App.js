import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

//component
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithImage from './PopupWithImage';
import EditProfilePopUp from './EditProfilePopUp';
import EditAvatarPopUp from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePopup from './DeletePopup';

//login
import Login from './Login';
import SignUp from './SignUp';
import {auth} from '../utils/auth';
import ProtectedRoute from './ProtectedRoute'
import InfoTooltip from './InfoTooltip';

//context
import {CurrentUserContext} from '../contexts/CurrentUserContext';
//util
import {api} from '../utils/api';
import {formValidator} from '../utils/formvalidator'

function App() {
  //history
  const history = useHistory();

  //state
  const [selectedCard, setselectedCard] = React.useState({link:'#'});
  const [currentUser, setcurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(false);

  //isOpen props for popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = React.useState(false); 
  const [isCardOpen, setisCardOpen] = React.useState(false);
  const [isToolTipOpen, setisToolTipOpen] = React.useState(false);
  const [isSuccess, setisSuccess] = React.useState(false);

  //update user functions
  function handleUpdateUser(name, about){
    api.editProfile(name, about).then((data)=>{
      setcurrentUser(data);
    }).catch((err) => { 
      console.log(err);  
      alert(err);
    }).finally(()=>{closeAllPopups()})
  }

  function handleUpdateAvatar(link){
    api.editAvatar(link).then((data)=>{
      setcurrentUser(data);
    }).catch((err) => { 
      console.log(err);
      alert(err);
    }).finally(()=>{closeAllPopups()})
  }
  //card functions
  function handleDeleteClick(card){
    setselectedCard(card);
    setisDeletePopupOpen(true);
  }

  function handleCardClick(card){
    setisCardOpen(true);
    setselectedCard(card);
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    }).catch((err) => { 
      console.log(err);
      alert(err);
    }).finally(()=>{closeAllPopups()})
  } 

  function handleCardDelete(cardId){
    //delete the card
    api.deleteCard(cardId).then(() => { 
      const newCards = cards.filter((c)=>{
        return c._id !== cardId;
      }); 
      setCards(newCards);
    }).catch((err) => { 
        console.log(err); 
        alert(err);
      }).finally(()=>{closeAllPopups()})
  }
  
  //popup functions
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick(){
    setisEditAvatarPopupOpen(true);
  }

  function handleAddPlaceSubmit(name, link){
    api.addCard(name,link).then((newCard) => { 
      setCards([...cards, newCard]); 
    }).catch((err) => { 
        console.log(err); 
        alert(err);
      }).finally(()=>{closeAllPopups()})
  }

  //login functions
  function handleLogin(isLoggedIn){
    setloggedIn(isLoggedIn);
    if(!isLoggedIn){
    //delete token
    localStorage.removeItem('token');
    }
  }

  function handleDisplayInfoTooltip(success){
    setisSuccess(success);
    setisToolTipOpen(true);
  }

  function handleRegisterUser(email, password){
    auth.register(email, password)
    .then((res) => {
      if(res){
        handleDisplayInfoTooltip(true);
        history.push("/login");
        handleLogInUser(email, password);
      }
      else{
        handleDisplayInfoTooltip(false);
      }
    })
  }

  function handleLogInUser(email, password){
    auth.login(email, password)
    .then((res) => {
      if(res){
        handleLogin(true);
        history.push("/");
      }
      else{
        handleDisplayInfoTooltip(false);
      }
    })
  }
  
  //close and reset popups
  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisDeletePopupOpen(false);
    setisCardOpen(false);
    setisToolTipOpen(false);
    setselectedCard({link:'#'});
  }
  
  //click outside container 
  function handleClickOutsideForm(e, selector){
    if(e.target.className.includes(selector)){
      closeAllPopups();
    }
  }

  //close window when escape is pressed
  const handleKeyPress = React.useCallback((e) => {
      if(e.key === 'Escape'){ 
        closeAllPopups(); 
      } 
    }, []);

//add Escape event
React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

    //get user and initial cards
    React.useEffect(()=>{
      //get user from token
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        setloggedIn(true);
        auth.authorize(token).then((data)=>{
          setUserEmail(data.data.email);
          api.getUser().then((data)=>{
            setcurrentUser(data);
            //get cards
            api.getCards().then((data) => {  
              setCards(data)
            }).catch((err) => { 
                console.log(err);
              })
          }).catch((err) => { 
            console.log(err);
          })
        }).catch((err) => { 
            console.log(err);
          })
      }
      //after loading everything, set loading to false
      setLoading(false);
    },[loggedIn])

  return (
    //show loading message if user and cards are not loaded
  loading ? <div className="App page loading">Loading page...</div> :

<div className="App page">
<CurrentUserContext.Provider value={currentUser}>
  <Header loggedIn={loggedIn} login={handleLogin} email={userEmail} />
  <Switch>
  <Route path="/signup">
    <SignUp
      formValidator={formValidator.formValidator}
      fieldValidator={formValidator.fieldValidator}
      registerUser={handleRegisterUser}
    />
  </Route>
  <Route path="/login">
  {
    () => !loggedIn ?
    <Login
      formValidator={formValidator.formValidator}
      fieldValidator={formValidator.fieldValidator}
      logInUser={handleLogInUser}
    /> : 
    //redirect to main if already logged in
    <Redirect to='/' />
  }
  </Route>
  <ProtectedRoute path="*" 
    loggedIn={loggedIn} 
    component={Main}
    onEditProfile = {handleEditProfileClick}
    onAddPlace = {handleAddPlaceClick}
    onEditAvatar = {handleEditAvatarClick}
    onCardClick = {handleCardClick}
    card = {selectedCard}
    cards = {cards}
    onCardLike = {handleCardLike}
    onCardDelete = {handleDeleteClick}
  >
  </ProtectedRoute>
  </Switch>
  <Footer />
  <EditProfilePopUp 
    isOpen={isEditProfilePopupOpen} 
    onClose={closeAllPopups}
    onUpdateUser={handleUpdateUser}
    onOutsideClick={handleClickOutsideForm}
    formValidator={formValidator.formValidator}
    fieldValidator={formValidator.fieldValidator}
  />

  <AddPlacePopup 
    isOpen={isAddPlacePopupOpen} 
    onClose={closeAllPopups}
    onAddPlace={handleAddPlaceSubmit}
    onOutsideClick={handleClickOutsideForm}
    formValidator={formValidator.formValidator}
    fieldValidator={formValidator.fieldValidator}
    />

  <EditAvatarPopUp 
    isOpen={isEditAvatarPopupOpen} 
    onClose={closeAllPopups}
    onUpdateAvatar={handleUpdateAvatar}
    onOutsideClick={handleClickOutsideForm}
    formValidator={formValidator.formValidator}
    fieldValidator={formValidator.fieldValidator}
    />
  
  <PopupWithImage 
    card={selectedCard} 
    isOpen={isCardOpen}
    onClose={closeAllPopups}
    onOutsideClick={handleClickOutsideForm}
    />

  <DeletePopup 
    isOpen={isDeletePopupOpen} 
    onClose={closeAllPopups}
    card = {selectedCard}
    onDelete = {handleCardDelete}
    onOutsideClick={handleClickOutsideForm}
  /> 

  <InfoTooltip 
    isOpen={isToolTipOpen} 
    onClose={closeAllPopups}
    onOutsideClick={handleClickOutsideForm}
    success={isSuccess}
  />
</CurrentUserContext.Provider>
</div>
)}

export default App;
