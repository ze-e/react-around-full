(this["webpackJsonpreact-around-auth"]=this["webpackJsonpreact-around-auth"]||[]).push([[0],{31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(1),c=a.n(o),i=a(21),s=a.n(i),r=a(8),u=(a(31),a(23)),p=a(2),l=a(3),d=a.p+"static/media/logo.6c4fd428.svg",_=c.a.createContext();var j=Object(l.i)((function(e){var t=c.a.useContext(_),a=Object(l.h)(),o=c.a.useState("login"),i=Object(p.a)(o,2),s=i[0],u=i[1],j=c.a.useState(!1),m=Object(p.a)(j,2),b=m[0],f=m[1];return c.a.useEffect((function(){"/signup"===a.pathname?u("signup"):"/login"===a.pathname&&u("login")}),[a]),Object(n.jsxs)("header",{className:"header ".concat(!e.loggedIn&&"header_state_loggedOut"),children:[Object(n.jsxs)("div",{className:"header__logo-menu",children:[Object(n.jsx)("img",{className:"header__logo",src:d,alt:"logo"}),e.loggedIn&&Object(n.jsx)("button",{className:"header__menu-icon ".concat(b&&"header__menu-icon_state_closed"),type:"button",onClick:function(){f(!b)}})]}),Object(n.jsx)("nav",{className:"header__nav ".concat(!b&&e.loggedIn&&"header__nav_state_closed"),children:e.loggedIn?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"header__email",children:t.email}),Object(n.jsx)("button",{className:"header__link_type_logout",type:"button",onClick:function(){e.login(!1),f(!1)},children:"Log out"})]}):"login"===s?Object(n.jsx)(r.b,{to:"./signup",className:"header__link",children:"Sign up"}):Object(n.jsx)(r.b,{to:"./login",className:"header__link",children:"Log in"})})]})}));var m=function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState(!1),r=Object(p.a)(s,2),u=r[0],l=r[1],d=c.a.useState(0),j=Object(p.a)(d,2),m=j[0],b=j[1],f=c.a.useContext(_);c.a.useEffect((function(){e.card.owner&&(e.card.owner===f._id?l(!0):l(!1))}),[e.card]);var h="element__delete-button ".concat(u&&"element__delete-button_visibility_visible");c.a.useEffect((function(){e.card.likes&&(e.card.likes.some((function(e){return e===f._id}))?i(!0):i(!1))}),[e.card]);var O="element__like-button ".concat(o&&"element__like-button_stateliked");return c.a.useEffect((function(){e.card.likes&&b(e.card.likes.length)}),[e.card]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:h,onClick:function(){e.onCardDelete(e.card)}}),Object(n.jsx)("img",{className:"element__image",src:e.card.link,onClick:function(){e.onCardClick(e.card)},alt:"place"}),Object(n.jsxs)("div",{className:"element__text",children:[Object(n.jsx)("h2",{className:"element__title",children:e.card.name}),Object(n.jsxs)("div",{className:"element__likes-container",children:[Object(n.jsx)("button",{className:O,onClick:function(){e.onCardLike(e.card)}}),Object(n.jsx)("p",{className:"element__likes-display",children:m})]})]})]})},b=a.p+"static/media/profile-img.074e6423.png";var f=function(e){var t=c.a.useContext(_);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__image-container",children:[Object(n.jsx)("div",{className:"profile__image-overlay",onClick:e.onEditAvatar}),Object(n.jsx)("img",{className:"profile__image",src:t.avatar?t.avatar:b,alt:"profile-img"})]}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__name",children:t.name?t.name:"Jacques Cousteau"}),Object(n.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,"aria-label":"edit profile"}),Object(n.jsx)("p",{className:"profile__description",children:t.about?t.about:"Explorer"})]}),Object(n.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace})]}),Object(n.jsx)("section",{className:"elements",children:e.cards.length>0?e.cards.map((function(t){return Object(n.jsx)("div",{className:"element",children:Object(n.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})},t._id)})):Object(n.jsx)("div",{className:"loading",children:"Add your first place with the + button!"})})]})};var h=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around The U.S."})})};var O=function(e){return Object(n.jsx)("section",{className:"popup popup_type_image ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup popup_type_image")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("div",{className:"popup__image-modal",children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_image",type:"button",onClick:e.onClose}),Object(n.jsxs)("figure",{children:[Object(n.jsx)("img",{className:"popup__image",src:e.card&&e.card.link,alt:"place"}),Object(n.jsx)("figcaption",{className:"popup__image-caption"})]})]})})})};var g=function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useContext(_),r=c.a.useState(""),u=Object(p.a)(r,2),l=u[0],d=u[1],j=c.a.useState(""),m=Object(p.a)(j,2),b=m[0],f=m[1];c.a.useEffect((function(){V(!0),i(!1),s.name&&d(s.name),s.about&&f(s.about)}),[e.isOpen]);var h=c.a.useRef(),O=c.a.useState(""),g=Object(p.a)(O,2),v=g[0],x=g[1],k=c.a.useState(""),y=Object(p.a)(k,2),N=y[0],C=y[1],S=c.a.useState(!0),L=Object(p.a)(S,2),E=L[0],V=L[1];return Object(n.jsx)("section",{className:"popup popup_type_edit-profile ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup_type_edit-profile")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("form",{className:"popup__form popup__form_type_edit-profile",onSubmit:function(t){E||(t.preventDefault(),e.onUpdateUser(l,b),i(!0))},onChange:function(){e.formValidator(h.current,".popup__input")?V(!0):V(!1)},ref:h,children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_edit-profile",type:"button",onClick:e.onClose}),Object(n.jsx)("h4",{className:"popup__title",children:"Edit Profile"}),Object(n.jsx)("input",{className:"popup__input popup__input-name ".concat(""!==v&&"popup__input_type_error"),id:"name-input",type:"text",name:"name",required:!0,minLength:"2",maxLength:"40",placeholder:s.name,value:l,onChange:function(t){d(t.target.value),e.fieldValidator(t.target,x)}}),Object(n.jsx)("span",{className:'popup__input-error" id="name-input-error '.concat(""!==v&&"popup__error_visible"),children:v}),Object(n.jsx)("input",{className:"popup__input popup__input-description ".concat(""!==N&&"popup__input_type_error"),id:"description-input",type:"text",name:"description",required:!0,minLength:"2",maxLength:"200",placeholder:s.about,value:b,onChange:function(t){f(t.target.value),e.fieldValidator(t.target,C)}}),Object(n.jsx)("span",{className:'popup__input-error" id="description-input-error '.concat(""!==N&&"popup__error_visible"),children:N}),Object(n.jsx)("button",{className:"popup__submit popup__edit-profile-submit ".concat(E&&"popup__submit_disabled"),disabled:E,type:"submit",children:"".concat(o?"Loading...":"Save")})]})})})};var v=function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState(""),r=Object(p.a)(s,2),u=r[0],l=r[1];c.a.useEffect((function(){l(""),g(!0),i(!1)}),[e.isOpen]);var d=c.a.useRef(),_=c.a.useState(""),j=Object(p.a)(_,2),m=j[0],b=j[1],f=c.a.useState(!0),h=Object(p.a)(f,2),O=h[0],g=h[1];return Object(n.jsx)("section",{className:"popup popup_type_edit-avatar ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup_type_edit-avatar")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("form",{className:"popup__form popup__form_type_edit-avatar",onSubmit:function(t){O||(t.preventDefault(),e.onUpdateAvatar(u),i(!0))},onChange:function(){e.formValidator(d.current,".popup__input")?g(!0):g(!1)},ref:d,children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_edit-avatar",type:"button",onClick:e.onClose}),Object(n.jsx)("h4",{className:"popup__title",children:"Change profile picture"}),Object(n.jsx)("input",{className:"popup__input popup__input-avatar ".concat(""!==m&&"popup__input_type_error"),id:"avatar-input",type:"url",name:"avatar",value:u,placeholder:"Image URL",required:!0,onChange:function(t){l(t.target.value),e.fieldValidator(t.target,b)}}),Object(n.jsx)("span",{className:"popup__input-error ".concat(""!==m&&"popup__error_visible"),id:"avatar-input-error",children:m}),Object(n.jsx)("button",{className:"popup__submit popup__edit-avatar-submit ".concat(O&&"popup__submit_disabled"),type:"submit",disabled:O,children:"".concat(o?"Loading...":"Save")})]})})})};var x=function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState(""),r=Object(p.a)(s,2),u=r[0],l=r[1],d=c.a.useState(""),_=Object(p.a)(d,2),j=_[0],m=_[1];c.a.useEffect((function(){l(""),m(""),L(!0),i(!1)}),[e.isOpen]);var b=c.a.useRef(),f=c.a.useState(""),h=Object(p.a)(f,2),O=h[0],g=h[1],v=c.a.useState(""),x=Object(p.a)(v,2),k=x[0],y=x[1],N=c.a.useState(!0),C=Object(p.a)(N,2),S=C[0],L=C[1];return Object(n.jsx)("section",{className:"popup popup_type_add-card ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup_type_add-card")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("form",{className:"popup__form popup__form_type_add-card",onSubmit:function(t){S||(t.preventDefault(),e.onAddPlace(u,j),i(!0))},onChange:function(){e.formValidator(b.current,".popup__input")?L(!0):L(!1)},ref:b,children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_add-card",type:"button",onClick:e.onClose}),Object(n.jsx)("h4",{className:"popup__title",children:"New Place"}),Object(n.jsx)("input",{className:"popup__input popup__input-card-name ".concat(""!==O&&"popup__input_type_error"),id:"card-name-input",type:"text",name:"name",placeholder:"Title",required:!0,minLength:"1",maxLength:"30",value:u,onChange:function(t){l(t.target.value),e.fieldValidator(t.target,g)}}),Object(n.jsx)("span",{className:'popup__input-error" id="card-name-input-error '.concat(""!==O&&"popup__error_visible"),children:O}),Object(n.jsx)("input",{className:"popup__input popup__input-card-url ".concat(""!==k&&"popup__input_type_error"),id:"url-input",type:"url",name:"link",placeholder:"Image URL",required:!0,value:j,onChange:function(t){m(t.target.value),e.fieldValidator(t.target,y)}}),Object(n.jsx)("span",{className:"popup__input-error ".concat(""!==k&&"popup__error_visible"),id:"url-input-error",children:k}),Object(n.jsx)("button",{className:"popup__submit popup__add-card-submit ".concat(S&&"popup__submit_disabled"),disabled:S,type:"submit",children:"".concat(o?"Loading...":"Create")})]})})})};var k=function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1];return c.a.useEffect((function(){i(!1)}),[e.isOpen]),Object(n.jsx)("section",{className:"popup popup_type_delete ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup_type_delete")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("form",{className:"popup__form",onSubmit:function(t){t.preventDefault(),e.onDelete(e.card._id),i(!0)},children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_add-card"}),Object(n.jsx)("h4",{className:"popup__title popup__title_type_no-bottom-margin",children:"Are you sure?"}),Object(n.jsx)("button",{className:"popup__submit popup__delete-submit",type:"submit",children:"".concat(o?"Loading...":"Delete")})]})})})};var y=Object(l.i)((function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState(""),u=Object(p.a)(s,2),l=u[0],d=u[1],_=c.a.useState(""),j=Object(p.a)(_,2),m=j[0],b=j[1];c.a.useEffect((function(){E(!0),i(!1)}),[]);var f=c.a.useRef(),h=c.a.useState(""),O=Object(p.a)(h,2),g=O[0],v=O[1],x=c.a.useState(""),k=Object(p.a)(x,2),y=k[0],N=k[1],C=c.a.useState(!0),S=Object(p.a)(C,2),L=S[0],E=S[1];return Object(n.jsx)("section",{className:"login",children:Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),L||(i(!0),e.logInUser(l,m),i(!1))},onChange:function(){e.formValidator(f.current,".login__input")?E(!0):E(!1)},ref:f,children:[Object(n.jsx)("h1",{className:"login__title",children:"Log in"}),Object(n.jsx)("input",{className:"login__input ".concat(""!==g&&"popup__input_type_error"),id:"email-input",type:"email",name:"email",minLength:"2",maxLength:"40",required:!0,placeholder:"Email",value:l,onChange:function(t){d(t.target.value),e.fieldValidator(t.target,v)}}),Object(n.jsx)("span",{className:"popup__input-error  ".concat(""!==g&&"popup__error_visible"),children:g}),Object(n.jsx)("input",{className:"login__input ".concat(""!==y&&"popup__input_type_error"),id:"password-input",type:"password",name:"password",minLength:"7",maxLength:"12",required:!0,placeholder:"Password",value:m,onChange:function(t){b(t.target.value),e.fieldValidator(t.target,N)}}),Object(n.jsx)("span",{className:"popup__input-error ".concat(""!==y&&"popup__error_visible"),children:y}),Object(n.jsxs)("button",{className:"login__submit ".concat(L&&"login__submit_disabled"),disabled:L,type:"submit",children:["".concat(o?"Loading...":"Log In")," "]})]}),Object(n.jsxs)("p",{className:"login__caption",children:["Not a member yet? Sign up ",Object(n.jsx)(r.b,{to:"./signup",className:"login__link",children:"here"}),"!"]})]})})}));var N=Object(l.i)((function(e){var t=c.a.useState(!1),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState(""),u=Object(p.a)(s,2),l=u[0],d=u[1],_=c.a.useState(""),j=Object(p.a)(_,2),m=j[0],b=j[1];c.a.useEffect((function(){E(!0),i(!1)}),[]);var f=c.a.useRef(),h=c.a.useState(""),O=Object(p.a)(h,2),g=O[0],v=O[1],x=c.a.useState(""),k=Object(p.a)(x,2),y=k[0],N=k[1],C=c.a.useState(!0),S=Object(p.a)(C,2),L=S[0],E=S[1];return Object(n.jsx)("section",{className:"login",children:Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),L||(i(!0),e.registerUser(l,m),i(!1))},onChange:function(){e.formValidator(f.current,".login__input")?E(!0):E(!1)},ref:f,children:[Object(n.jsx)("h1",{className:"login__title",children:"Sign up"}),Object(n.jsx)("input",{className:"login__input ".concat(""!==g&&"popup__input_type_error"),id:"email-input",type:"email",name:"email",minLength:"2",maxLength:"40",required:!0,placeholder:"Email",value:l,onChange:function(t){d(t.target.value),e.fieldValidator(t.target,v)}}),Object(n.jsx)("span",{className:"popup__input-error  ".concat(""!==g&&"popup__error_visible"),children:g}),Object(n.jsx)("input",{className:"login__input ".concat(""!==y&&"popup__input_type_error"),id:"password-input",type:"password",name:"password",minLength:"7",maxLength:"12",required:!0,placeholder:"Password",value:m,onChange:function(t){b(t.target.value),e.fieldValidator(t.target,N)}}),Object(n.jsx)("span",{className:"popup__input-error ".concat(""!==y&&"popup__error_visible"),children:y}),Object(n.jsx)("button",{className:"login__submit ".concat(L&&"login__submit_disabled"),disabled:L,type:"submit",children:"".concat(o?"Loading...":"Sign Up")})]}),Object(n.jsxs)("p",{className:"login__caption",children:["Already a member? Log in ",Object(n.jsx)(r.b,{to:"./login",className:"login__link",children:"here"}),"!"]})]})})})),C=a(10),S=a(11);a(19).config({path:"../../../"});var L=new(function(){function e(){Object(C.a)(this,e)}return Object(S.a)(e,[{key:"register",value:function(e,t){return fetch("".concat("","/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"login",value:function(e,t){return fetch("".concat("","/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))}},{key:"authorize",value:function(){return fetch("".concat("","/users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}}]),e}()),E=a(24),V=a(25),w=function(e){var t=e.component,a=Object(V.a)(e,["component"]);return Object(n.jsx)(l.b,{children:function(){return a.loggedIn?Object(n.jsx)(t,Object(E.a)({},a)):Object(n.jsx)(l.a,{to:"/login"})}})};var T=function(e){return Object(n.jsx)("section",{className:"popup popup_type_tooltip ".concat(e.isOpen&&"popup_state_opened"),onClick:function(t){e.onOutsideClick(t,"popup_type_tooltip")},children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("div",{className:"popup__body",children:[Object(n.jsx)("button",{className:"popup__close popup__close_type_tooltip",type:"button",onClick:e.onClose}),Object(n.jsx)("div",{className:"".concat(e.success?"popup__icon_type_success":"popup__icon_type_failure")}),Object(n.jsx)("h4",{className:"popup__title popup__title_type_bottom-margin-60",children:e.success?"Success! You have now been registered":"Oops, something went wrong! Please try again."})]})})})},P=new(function(){function e(t){var a=t.baseURL;Object(C.a)(this,e),this.baseURL=a}return Object(S.a)(e,[{key:"setToken",value:function(e){this.token=e}},{key:"getUser",value:function(){return fetch("".concat(this.baseURL,"/users/me"),{headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"getCards",value:function(){return fetch("".concat(this.baseURL,"/cards"),{headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this.baseURL,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseURL,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("editAvatar Error: ".concat(e.statusText))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseURL,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseURL,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.deleteLike(e):this.addLike(e)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("editLikes Error: ".concat(e.statusText))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("editLikes Error: ".concat(e.statusText))}))}}]),e}())({baseURL:""}),U=new(function(){function e(){Object(C.a)(this,e)}return Object(S.a)(e,[{key:"formValidator",value:function(e,t){return!!Array.from(e.querySelectorAll(t)).some((function(e){return!e.validity.valid}))}},{key:"fieldValidator",value:function(e,t){e.validity.valid?t(""):t(e.validationMessage)}}]),e}());var A=function(){var e=Object(l.g)(),t=c.a.useState({link:"#"}),a=Object(p.a)(t,2),o=a[0],i=a[1],s=c.a.useState({}),r=Object(p.a)(s,2),d=r[0],m=r[1],b=c.a.useState([]),C=Object(p.a)(b,2),S=C[0],E=C[1],V=c.a.useState(!0),A=Object(p.a)(V,2),I=A[0],R=A[1],D=c.a.useState(!1),q=Object(p.a)(D,2),z=q[0],J=q[1],F=c.a.useState(!1),B=Object(p.a)(F,2),H=B[0],M=B[1],W=c.a.useState(!1),G=Object(p.a)(W,2),Y=G[0],$=G[1],K=c.a.useState(!1),Q=Object(p.a)(K,2),X=Q[0],Z=Q[1],ee=c.a.useState(!1),te=Object(p.a)(ee,2),ae=te[0],ne=te[1],oe=c.a.useState(!1),ce=Object(p.a)(oe,2),ie=ce[0],se=ce[1],re=c.a.useState(!1),ue=Object(p.a)(re,2),pe=ue[0],le=ue[1],de=c.a.useState(!1),_e=Object(p.a)(de,2),je=_e[0],me=_e[1];function be(e){J(e),e||(m({}),localStorage.removeItem("token"))}function fe(e){me(e),le(!0)}function he(t,a){L.login(t,a).then((function(t){t?(be(!0),e.push("/")):fe(!1)}))}function Oe(){M(!1),$(!1),Z(!1),ne(!1),se(!1),le(!1),i({link:"#"})}function ge(e,t){e.target.className.includes(t)&&Oe()}var ve=c.a.useCallback((function(e){"Escape"===e.key&&Oe()}),[]);return c.a.useEffect((function(){return window.addEventListener("keydown",ve),function(){window.removeEventListener("keydown",ve)}}),[ve]),c.a.useEffect((function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");P.setToken(e),J(!0),P.getUser().then((function(e){m(e),P.getCards().then((function(e){E(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}R(!1)}),[d,z]),I?Object(n.jsx)("div",{className:"App page loading",children:"Loading page..."}):Object(n.jsx)("div",{className:"App page",children:Object(n.jsxs)(_.Provider,{value:d,children:[Object(n.jsx)(j,{loggedIn:z,login:be}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{path:"/signup",children:Object(n.jsx)(N,{formValidator:U.formValidator,fieldValidator:U.fieldValidator,registerUser:function(t,a){L.register(t,a).then((function(n){n?(fe(!0),e.push("/login"),he(t,a)):fe(!1)}))}})}),Object(n.jsx)(l.b,{path:"/login",children:function(){return z?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsx)(y,{formValidator:U.formValidator,fieldValidator:U.fieldValidator,logInUser:he})}}),Object(n.jsx)(w,{path:"*",loggedIn:z,component:f,onEditProfile:function(){M(!0)},onAddPlace:function(){$(!0)},onEditAvatar:function(){Z(!0)},onCardClick:function(e){se(!0),i(e)},card:o,cards:S,onCardLike:function(e){var t=e.likes.some((function(e){return e===d._id}));P.changeLikeCardStatus(e._id,t).then((function(t){var a=S.map((function(a){return a._id===e._id?t:a}));E(a)})).catch((function(e){console.log(e),alert(e)})).finally((function(){Oe()}))},onCardDelete:function(e){i(e),ne(!0)}})]}),Object(n.jsx)(h,{}),Object(n.jsx)(g,{isOpen:H,onClose:Oe,onUpdateUser:function(e,t){P.editProfile(e,t).then((function(e){m(e)})).catch((function(e){console.log(e),alert(e)})).finally((function(){Oe()}))},onOutsideClick:ge,formValidator:U.formValidator,fieldValidator:U.fieldValidator}),Object(n.jsx)(x,{isOpen:Y,onClose:Oe,onAddPlace:function(e,t){P.addCard(e,t).then((function(e){E([].concat(Object(u.a)(S),[e]))})).catch((function(e){console.log(e),alert(e)})).finally((function(){Oe()}))},onOutsideClick:ge,formValidator:U.formValidator,fieldValidator:U.fieldValidator}),Object(n.jsx)(v,{isOpen:X,onClose:Oe,onUpdateAvatar:function(e){P.editAvatar(e).then((function(e){m(e)})).catch((function(e){console.log(e),alert(e)})).finally((function(){Oe()}))},onOutsideClick:ge,formValidator:U.formValidator,fieldValidator:U.fieldValidator}),Object(n.jsx)(O,{card:o,isOpen:ie,onClose:Oe,onOutsideClick:ge}),Object(n.jsx)(k,{isOpen:ae,onClose:Oe,card:o,onDelete:function(e){P.deleteCard(e).then((function(){var t=S.filter((function(t){return t._id!==e}));E(t)})).catch((function(e){console.log(e),alert(e)})).finally((function(){Oe()}))},onOutsideClick:ge}),Object(n.jsx)(T,{isOpen:pe,onClose:Oe,onOutsideClick:ge,success:je})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19).config(),s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.375b4573.chunk.js.map