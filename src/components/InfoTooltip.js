import React from 'react';

function InfoTooltip(props){

  return(
    <section className={`popup popup_type_tooltip ${props.isOpen && 'popup_state_opened'}`} onClick={(e)=>{props.onOutsideClick(e,'popup_type_tooltip')}}>
      <div className="popup__container">
        <div className="popup__body">
        <button className="popup__close popup__close_type_tooltip" type="button" onClick={props.onClose}></button>  
        <div className={`${props.success ? 'popup__icon_type_success' : 'popup__icon_type_failure'}`}></div>     
        <h4 className="popup__title popup__title_type_bottom-margin-60">{props.success ? `Success! You have now been registered`:`Oops, something went wrong! Please try again.`}</h4>
        </div>
      </div>
    </section>
  )
}

export default InfoTooltip;