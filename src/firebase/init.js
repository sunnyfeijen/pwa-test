import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyAwLVKcxJ2EhK71u3-aD1cPcMoCC7zfgEE',
  authDomain: 'pwa-test-758dc.firebaseapp.com',
  databaseURL: 'https://pwa-test-758dc.firebaseio.com',
  projectId: 'pwa-test-758dc',
  storageBucket: 'pwa-test-758dc.appspot.com',
  messagingSenderId: '409611850994'
}

firebase.initializeApp(config)
