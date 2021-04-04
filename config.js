import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDsCm9YulcGzayr_0rVzxMt95aifG_pQFM',
  authDomain: 'class-attendance-app-5b8fd.firebaseapp.com',
  databaseURL: 'https://class-attendance-app-5b8fd-default-rtdb.firebaseio.com',
  projectId: 'class-attendance-app-5b8fd',
  storageBucket: 'class-attendance-app-5b8fd.appspot.com',
  messagingSenderId: '513118282220',
  appId: '1:513118282220:web:9c4bfae1cf6034a85e60c9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
