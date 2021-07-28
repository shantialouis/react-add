import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App form-control mt-3">
      <form>
      <label>Name</label>
      <input type="name" placeholder="Enter your name here" />
      <br /> <br />
      <label>Email</label>
      <input type="email" placeholder="enter your email" />
      <br/> <br />
      <label>Age</label>
      <input type="number" />
      <br/><br/>
      <button>Submit Form</button>

      </form>
      
     
      
      
    </div>
  );
}

export default App;
