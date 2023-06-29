//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCbbTb5V8a9hQPz4CJW10WktBKc8rSPIT0",
      authDomain: "new-folder-2-kwitter-projects.firebaseapp.com",
      databaseURL: "https://new-folder-2-kwitter-projects-default-rtdb.firebaseio.com",
      projectId: "new-folder-2-kwitter-projects",
      storageBucket: "new-folder-2-kwitter-projects.appspot.com",
      messagingSenderId: "336098873757",
      appId: "1:336098873757:web:d0346cbfd97ea4db41df74"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


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
 