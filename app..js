
var key;
function get(){
  var email=document.getElementById("upemail").value;
  var password=document.getElementById("uppass").value;
console.log(email+"<br>"+password);
}
  
function signup(){

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });email-password.html
}
let signin = () =>{
  var email=document.getElementById("inemail");
  var password=document.getElementById("inpass");


  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(function(result){

    console.log(result)
  console.log(email+password)

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
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
    console.log(error.Message)
    
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
var ref = firebase.database().ref('mess');

ref.on("child_added", function(snapshot) {
    var area=document.getElementById('areat');
    var dd=document.createElement("div");
    var head=document.createElement('h6');
    var btnd=document.createElement("button");
    btnd.setAttribute("class","btn btn-danger bttk");

    var btt=document.createTextNode("Delete");
    btnd.setAttribute("onclick","deleteitem(this)");

    btnd.setAttribute("id",snapshot.val().key);

    btnd.appendChild(btt);
    var us=snapshot.val().username;
    var ct=snapshot.val().chattext;
  // us.className="bb";
    var text=document.createTextNode(us+" : "+ct);
    console.log(snapshot.val())
    head.appendChild(text);
    head.className="edit";
    dd.appendChild(head);
    dd.appendChild(btnd);

    dd.className="wwa";
    area.appendChild(dd);
     
}, function (error) {
   console.log("Error: " + error.code);
});
var newe = email;
function gete(){
  console.log();
}
function enter(){
    var input=document.getElementById('mess');
    var key1=Math.random()*100;
key = key1.toFixed();
    var chatsz= {
      key : key,

        username:localStorage.getItem(1),
chattext: mess.value,
    }
    console.log(chatsz);
    firebase.database().ref('mess').child(key).set(chatsz);
mess.value="";
}
function deleteitem(e){
    e.parentNode.remove();
    firebase.database().ref('mess').child(e.id).remove();
   }