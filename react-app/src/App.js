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

      <a href="https://github.com/DishaPatel126/basic-react-app/tree/main/react-app" target="_blank" rel="noopener noreferrer">
        <button>Visit My GitHub Repo  </button>
      </a>
    </div>
  );
}




export default App;
