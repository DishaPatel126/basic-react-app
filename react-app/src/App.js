import './App.css';

// Arrow Function 
const hello = () =>{
  return "Hello World from the arrow function!";
}


// Basic Functional Component
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{hello()}</h2>
    </div>
  );
}




export default App;
