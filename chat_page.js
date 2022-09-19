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

function getData() { firebase.database().ref("/" + room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";

}

room_name = localStorage.getItem("room_name");

user_name = localStorage.getItem("user_name");