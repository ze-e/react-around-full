import {baseURL as BASE_URL} from './config';

class Auth{
  register(email, password){
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email" : email, "password" : password})
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Error: ${res.statusText}`);
    })
  }

  login(email, password){
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email" : email, "password" : password})
    })
    .then((response) => response.json())
    .then((res) => {
      if(res.token){
        localStorage.setItem('token', res.token);
        return res;
      }
    })
  }

  authorize(){
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Error: ${res.statusText}`);
    })  
  }

}

export const auth = new Auth();