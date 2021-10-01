const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC7N1x5fSRjlPI5NuVnx1osDkvrchE5HoA",
  authDomain: "shri-teq-pac-man-48d1f.firebaseapp.com",
  databaseURL: "https://shri-teq-pac-man-48d1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shri-teq-pac-man-48d1f",
  storageBucket: "shri-teq-pac-man-48d1f.appspot.com",
  messagingSenderId: "375352094557",
  appId: "1:375352094557:web:7ec64375d7412f24dec2b4",
  measurementId: "G-Q70295JKHZ"
};

console.log()

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore through Firebase

var db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});
