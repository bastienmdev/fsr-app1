import './App.css';

const URL = 'http://localhost:5000/api/users';

fetch(URL)
  .then(response => response.json())
  .then(response => console.log(response))


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
