import React, { Component } from 'react';
import firebase from 'firebase';

// Your config
const firebaseConfig = {
    apiKey: "AIzaSyAchmCo_wmKziCrfNQSDzXsUS_riH0tvrs",
    authDomain: "hemarays.firebaseapp.com",
    databaseURL: "https://hemarays.firebaseio.com",
    projectId: "hemarays",
    storageBucket: "hemarays.appspot.com",
    messagingSenderId: "622988071706",
    appId: "1:622988071706:web:30b96a0fb76e8e47f9d2a3",
    measurementId: "G-JJKHP0NZKY"
  };

// My config
// const firebaseConfig = {
//   apiKey: "AIzaSyCd57Llj23w5PQw5GE5NTXN2ECyULenCek",
//     authDomain: "fyp-bahria.firebaseapp.com",
//     databaseURL: "https://fyp-bahria.firebaseio.com",
//     projectId: "fyp-bahria",
//     storageBucket: "fyp-bahria.appspot.com",
//     messagingSenderId: "367132040812",
//     appId: "1:367132040812:web:80420f7ed38538dd77c249",
//     measurementId: "G-R1E6DYXQ2S"
// // Initialize Firebase
// };
export default class fire{
  static auth;
  static getFire()
  {
    if(!firebase.apps.length)
    {
      firebase.initializeApp(firebaseConfig);
    }
    return firebase;
  }
  
}