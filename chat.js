// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyAgYOoiCOuZmsnO-j-Cah7mcftSAMmn1PY",
    authDomain: "chitterchat-405af.firebaseapp.com",
    databaseURL: "https://chitterchat-405af-default-rtdb.firebaseio.com",
    projectId: "chitterchat-405af",
    storageBucket: "chitterchat-405af.appspot.com",
    messagingSenderId: "8751614134",
    appId: "1:8751614134:web:05cfd7217d42090f6bfe17",
    measurementId: "G-TNQ2XL9WMW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



