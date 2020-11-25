import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Login(props){
  //loading
  const [loading, setLoading] = React.useState(false);
  //form field
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //reset form on open
  React.useEffect(()=>{
    setFormInvalid(true);
    setLoading(false);
  },[])
  
  function handleSubmit(e) {
    e.preventDefault();   
    if(!formInvalid){
      //check if the form is valid before sending
      //login user
      setLoading(true);
      props.logInUser(email, password);
      //set loading
      setLoading(false);
    }
  } 

  /* CLIENT FORM VALIDATION
    By default, no validation error for blank required field is 
    shown at the beginning, but the submit button will be
    disabled.

    The button style/disabled state and individual field validations are 
    independent of one another. Field validations control only the field styles, 
    and form/button validation controls the ability to send the form
  */
  const formRef = React.useRef();
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [formInvalid, setFormInvalid] = React.useState(true)


function handleEmail(e) {
  //set value
  setEmail(e.target.value);
  //set error
  props.fieldValidator(e.target, setEmailError)
}

function handlePassword(e) {
  //set value
  setPassword(e.target.value);
  //set error
  props.fieldValidator(e.target, setPasswordError)
}

function validateForm(){
  props.formValidator(formRef.current,'.login__input') ? setFormInvalid(true) : setFormInvalid(false);
}

  return(
    <section className="login">
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit} onChange={validateForm} ref={formRef}>
      <h1 className="login__title">Log in</h1>
        <input className={`login__input ${emailError !=='' && 'popup__input_type_error'}`} id="email-input" type="email" name="email" minLength="2" maxLength="40" required placeholder="Email" value={email} onChange={handleEmail}/>
          <span className={`popup__input-error  ${emailError !=='' && 'popup__error_visible'}`}>{emailError}</span>
        <input className={`login__input ${passwordError !=='' && 'popup__input_type_error'}`} id="password-input" type="password" name="password" minLength="7" maxLength="12" required placeholder="Password" value={password} onChange={handlePassword}/>
          <span className={`popup__input-error ${passwordError !=='' && 'popup__error_visible'}`}>{passwordError}</span>
        <button className={`login__submit ${formInvalid && 'login__submit_disabled'}`} disabled={formInvalid} type="submit">{`${loading ? 'Loading...':'Log In'}`} </button>
      </form>
      <p className="login__caption">Not a member yet? Sign up <Link to="./signup" className="login__link">here</Link>!</p>
    </div>
  </section>  
  )
}

export default withRouter(Login);