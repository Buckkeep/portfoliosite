import logo from './logo.svg';
import './App.css';
import profilephoto from './components/vader.png'
import Header from './components/Layouts/Header';
import Usercard from './components/Usercard';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Usercard 
        username = {'Vader'}
        avatar = {profilephoto}
        age = {'Eternal'}
        hobby = {'Force Choking'}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my edit to this page!</p>
        <h1>My Hobby</h1>
        Playing Xenoblade Chronicles
        <h1>Rules</h1>
        Kill monsters. British accent at all times.
        <h1>Why do I enjoy it</h1>
        I love the open world of XC Definitive Edition. I also love slaying monsters.
        
        <p><MyButton /></p>

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
  );
}

export default App;
