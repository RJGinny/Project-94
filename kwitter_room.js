
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBTrxNaCXU9Zt6U019oHWbftdnCSON4BCQ",
  authDomain: "project94-b812a.firebaseapp.com",
  databaseURL: "https://project94-b812a-default-rtdb.firebaseio.com",
  projectId: "project94-b812a",
  storageBucket: "project94-b812a.appspot.com",
  messagingSenderId: "75866921616",
  appId: "1:75866921616:web:98447d3a7cbb098007d615"

  };
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })
  }