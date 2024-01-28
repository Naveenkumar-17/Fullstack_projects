var Add1=document.getElementById("add");
var overlay=document.getElementById("overlay");
var query=document.querySelector("#query");
const submit=document.getElementById("submit");
const content=document.getElementById("content");
console.log(Add1);
Add1.onclick=function(){
    console.log(overlay);
      overlay.style.visibility="visible";
      query.style.visibility="visible";
}
submit.onclick=function(event){
    event.preventDefault();
    var Book=document.getElementById("Bookname").value;
    var Author=document.getElementById("Author").value;
    var Description=document.getElementById("descrip").value;
    var cont=document.getElementById("whole");
    var New=document.createElement("div");
    console.log(cont);
    New.setAttribute("class","content");
    New.innerHTML=`<h2 style='color:rgb(156, 53, 88)'>${Book}</h2><h3 style='color:yellow'>${Author}</h3><p> ${Description} </p><button onclick='Delete1(event)' class='btn' >Delete</button>`
    cont.append(New);
    console.log(Book,Description);
    overlay.style.visibility="hidden";
      query.style.visibility="hidden";
} 
var cancel=document.getElementById("cancel");
cancel.addEventListener("click",function(event

){
event.preventDefault();
overlay.style.visibility="hidden";
      query.style.visibility="hidden";
});
var Delete=document.getElementById("delete");
Delete.addEventListener("click",function(event){
event.target.parentElement.remove();
});
function Delete1(event){
    event.target.parentElement.remove();
}
