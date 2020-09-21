let signup = () => {
var email=document.getElementById("exampleInputEmail1");
var password=document.getElementById("exampleInputPassword1");
// document.write(email.value)

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((result) => {
console.log(result);
})

.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
alert(errorMessage);
    // ...
  });
}

let signin = () =>{
  var email=document.getElementById("exampleInputEmail1");
  var password=document.getElementById("exampleInputPassword1");

  

  firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

let facebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user=result.user;
    console.log("User ===>"+user);
  }).catch(function(error) {
    console.log(error.Message)
    
  });
}

let google = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    console.log("User ===>"+user);

      }).catch(function(error) {
    console.log(error.Message)
    
    
    // ...
  });
}

function newdiv(){
  var a=document.getElementById('newdiva');
  var b=document.getElementById('first')
  b.style.display='none';
  a.style.display='block';
}