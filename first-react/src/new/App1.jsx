import "./style-new.css"

const Add=()=>{
document.getElementById("display").innerHTML="<Task/>"  
var input=document.getElementById("task");  
var display1=document.getElementById("display1");
var ip=document.getElementById("dialog-box");
ip.style.display="none";
console.log(display1);
display1.textContent=input.value;
input.value=" ";
view();
}
const view= () => {
    var mp = document.getElementById("main-page");
    var result = document.getElementById("display");
    result.style.display = "flex";
    mp.style.display = "none";
}

const view_back=()=>{
    document.getElementById("display").style.display="none";
    document.getElementById("main-page").style.display="block";
}
const Add_back=()=>{
    document.getElementById("dialog-box").style.display="none";
    document.getElementById("main-page").style.display="block";
}
export function Task()
{
    return(
        <h3 id="display1">hello</h3>
    );
}
function Todo() {
    return (
        <div className="body">
            <div id="main-page">
                <h1 className="title">Todo Application</h1>
                <div className="main-buttons">
                    <button id="view" onClick={view}>View Tasks</button>
                    <button id="mainadd" onClick={() => {
                        var input = document.getElementById("dialog-box");
                        var mp = document.getElementById("main-page");
                        input.style.display = "block";
                        mp.style.display = "none";
                    }} >Add Tasks</button>
                </div>
            </div>
            <div id="dialog-box" className="input-area">
                <h3>Add a Task</h3>
                <textarea type="text" placeholder="Enter here" spellCheck="true" id="task"></textarea>
                <div class="input-buttons">
                  <button className="btn" onClick={Add}>Add</button>
                  <button className="btn" onClick={Add_back}>Cancel</button>
                </div>
            </div>
            <div id="display" className="display">
                <h3 id="back-arrow" onClick={view_back}>⬅</h3>
                <h2>Upcoming Tasks</h2>
                
            </div>
        </div>);
}
export default Todo;