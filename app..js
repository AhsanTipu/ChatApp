
var key;
function get(){
  var email=document.getElementById("upemail").value;
  var password=document.getElementById("uppass").value;
console.log(email+"<br>"+password);
};

let signup = () =>{
  // var username=document.getElementById("username");
  var e=document.getElementById("upemail");
  var p=document.getElementById("uppass");
console.log(e.value+"<br>"+p.value);
  
  firebase.auth().createUserWithEmailAndPassword(e.value, p.value)
  .then((result) => {
    console.log(result)
 window.localStorage.setItem(1,e.value);
 window.location.href="main.html";

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });
  
};
function logout(){
window.location.replace("index.html");
};

let signin = () =>{
  var email=document.getElementById("email");
  var password=document.getElementById("pass");


  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(function(result){

    console.log(result)
    window.localStorage.setItem(1,email.value);
    window.location.href="main.html";
   

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}
var email=" ";
let facebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user=result.user;
    console.log("User ===>"+user);
    email=user.email;
    console.log(email);
 window.localStorage.setItem(1,email);
  
   window.location.href="main.html"
  }).catch(function(error) {
    alert(error.Message)
    
  });
}

let google = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // console.log(result.email);
     user = result.user;
    
    console.log("User ===>"+user.email);
 email=user.email;
 window.localStorage.setItem(1,email);
  
   window.location.href="main.html"
alert(email);

      }).catch(function(error) {
    alert(error.Message)
    
    
    // ...
  });
}

function newdiv(){
  var a=document.getElementById('newdiva');
  var b=document.getElementById('first')
  b.style.display='none';
  a.style.display='block';
}

var newe = email;
function gete(){
  console.log();
}

