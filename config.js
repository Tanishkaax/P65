import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEocH8GpOiqys9H_-jVN113o7cScnHKdE",
  authDomain: "p-67-3b5cf.firebaseapp.com",
  projectId: "p-67-3b5cf",
  storageBucket: "p-67-3b5cf.appspot.com",
  messagingSenderId: "1033845049094",
  appId: "1:1033845049094:web:5633a1cac5d964d47b8087"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();