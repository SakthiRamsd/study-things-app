import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjwq53tLZtFc_AftPHCLpXgg3KySxtlRU",
    authDomain: "quizapp-858b5.firebaseapp.com",
    projectId: "quizapp-858b5",
    storageBucket: "quizapp-858b5.appspot.com",
    messagingSenderId: "382121761884",
    appId: "1:382121761884:web:163aafd300ae97f0361a99",
    measurementId: "G-KEB2KYR8BD"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export{ firebase };