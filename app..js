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

let signin = () => {
    var email=document.getElementById("exampleInputEmail1");
    var password=document.getElementById("exampleInputPassword1");

    console.log(email.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {
        console.log("Login Succeessfull")
        console.log(result);
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
    }