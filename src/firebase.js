import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDVSyRAMJjxaNthencXanMBbEHsuI3V0FI",
  authDomain: "react-weather-racer-b40af.firebaseapp.com",
  databaseURL: "https://react-weather-racer-b40af.firebaseio.com",
  projectId: "react-weather-racer-b40af",
  storageBucket: "react-weather-racer-b40af.appspot.com",
  messagingSenderId: "669287401804"
};
firebase.initializeApp(config);

export default firebase;
