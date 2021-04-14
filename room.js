var firebaseConfig = {
    apiKey: "AIzaSyAPrfLDK5dzS76nAdu1zynsHOIA9_DdvIM",
    authDomain: "enter-your-project-name-16e4e.firebaseapp.com",
    databaseURL: "https://enter-your-project-name-16e4e-default-rtdb.firebaseio.com",
    projectId: "enter-your-project-name-16e4e",
    storageBucket: "enter-your-project-name-16e4e.appspot.com",
    messagingSenderId: "512759762934",
    appId: "1:512759762934:web:ad25140899696c554581d7",
    measurementId: "G-39V7LDPZD5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

localStorage.getItem("Username:");
document.getElementsById("namedisplay").innerHTML = username;

function logout(){
    window.location = "index.html";
}

























