import logo from './logo.svg';
import './App.css';
import React from 'react';

/*function App() {
  return (
  
    <React.Fragment>    ou <>    ou <div>
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
    </div>
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
   </div>
   
    </React.Fragment>    ou </> ou </div>
   
  );
}*/
let element = (
  <React.Fragment>
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
    </div>
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
   </div> 

    </React.Fragment>
)

const App= () =>{
  let variableTwo=["one",2,{
    name:"john",
    age:99,
    hoobies:["lire","ecrire"]
   sayHello: () => {console.log("hello odc!");}


  }
]
 // return element
 return (<>
{getTitle()} 
{getElement('Bienvenue Au cours ReactJs')}
</>
)
}

function getElement(title){
  return <h1>{title}</h1>
}

function getTitle(title){
  return <h1>{process.env.REACT_APP_TITLE}</h1>
}


var variable=0    //si on donne pas de valeur elle est de type undefined
alert(typeof(variable))

   // var on l'utilise pas, on utilise const ou let


export default App;
