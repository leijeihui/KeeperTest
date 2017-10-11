import React from 'react';
import axios from 'axios';

let handleUserSignup = (userInfo, callback) => {
  axios.post('/api/signup', userInfo).then(data => {
    window.location.href = `/#/${userInfo.username}/about`;
    callback(userInfo.username);
  }).catch(err => {
    if (err) { console.error(err); }
  });
};

let handleUserSignin = (userInfo, callback) => {
  axios.post('/api/signin', userInfo).then(data => {
    window.location.href = `/#/${userInfo.username}/about`;
    callback(userInfo.username);
  }).catch(err => {
    if (err) { console.error(err); }
  });
};

let handleUserLogout = (callback) => {
  axios.post('/api/logout').then(data => {
    window.location.href = '/#/';
  }).catch(err => {
    if (err) { console.error(err); }
  });
};
 
export {
  handleUserSignup,
  handleUserSignin,
  handleUserLogout
};