import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlCQV8RAfD1yJEIpU-rUpOQLwZQnYWwDM",
    authDomain: "swamphacksufgeoguesser.firebaseapp.com",
    databaseURL: "https://swamphacksufgeoguesser.firebaseio.com/",
    projectId: "swamphacksufgeoguesser",
    storageBucket: "swamphacksufgeoguesser.appspot.com",
    messagingSenderId: "786220427119",
    appId: "1:786220427119:web:6f66a1ace05a07d3436a9a",
    measurementId: "G-KSQKDLG0VX"
  };
var datab = firebase.initializeApp(firebaseConfig);
export default datab;