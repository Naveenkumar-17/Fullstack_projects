import logo from './logo.svg';
import './App.css';
function Hello(){
return(
<div>
  <h2 style={{color:"green"}}>Today is the first project in react </h2>
   <Max/>
    <Max/>
</div>);
}
const Max=()=>{
  return(<>
     <div className="hell" style={{width:"100px"}}>
      <p>
        The new Container is created successfully
      </p>
     </div>
   
    </>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 style={{color:"red"}}>I am Naveenkumar </h1>
       <Hello/>
    </div>
    
   
  );
  
}

export default App;
