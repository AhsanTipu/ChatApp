// var user='syedahsan2305@gmail.com';

// // firebase.database().ref('mess').on("child_added",function (data){
// //     var a=document.getElementById('mess').value;
// // var area=document.getElementById('areat');
// // var head=document.createElement('h6');
// // var text=document.createTextNode(a);
// // head.appendChild(text);
// // head.className="edit";
// // area.appendChild(head);

// // })
// var ref = firebase.database().ref('mess');

// ref.on("child_added", function(snapshot) {
//     var area=document.getElementById('areat');
//     var head=document.createElement('h6');
//     var us=snapshot.val().username;
//     var ct=snapshot.val().chattext;
//     var text=document.createTextNode(us+" : "+ct);
//     console.log(snapshot.val())
//     head.appendChild(text);
//     head.className="edit";
//     area.appendChild(head);
     
// }, function (error) {
//    console.log("Error: " + error.code);
// });

// function enter(){
//     var input=document.getElementById('mess');
//     var key1=Math.random()*100;
// key = key1.toFixed();
//     var chatsz= {
//         username:user,
// chattext: mess.value,
//     }
//     console.log(chatsz);
//     firebase.database().ref('mess').child(key).set(chatsz);
// mess.value="";
// }
// function deleteitem(e){
//     e.parentNode.remove();
//     firebase.database().ref('mess').child(e.id).remove();
//    }