var user='syedahsan2305@gmail.com';
let getText = () =>{
    
    var a=document.getElementById('mess').value;
var area=document.getElementById('areat');
var head=document.createElement('h6');
var text=document.createTextNode(user+" : "+a);
head.appendChild(text);
head.className="edit";
area.appendChild(head);

}
