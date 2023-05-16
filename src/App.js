import logo from './logo.svg';
import './App.css';
import vaderphoto from './components/vader.png';
import obiwan from './components/obiwan.png';
import Header from './components/Layouts/Header';
import Usercard from './components/Usercard';
import Main from './components/Layouts/Main';
//import Button from './components/Button';
import classNames from 'classnames';
import Button from './components/Buttons/Button';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Usercard 
        username = {'Vader'}
        avatar = {vaderphoto}
        age = {'Eternal'}
        hobby = {'Force Choking'}
        />
        <Usercard 
        username = {'ObiWan'}
        avatar = {obiwan}
        age = {'Too Old'}
        hobby = {'Babysitting'}
        />

        <Main />

        <img src={logo} className="App-logo" />
        <p>This is my edit to this page!</p>
        <h1>My Hobby</h1>
        Playing Xenoblade Chronicles
        <h1>Rules</h1>
        Kill monsters. British accent at all times.
        <h1>Why do I enjoy it</h1>
        I love the open world of XC Definitive Edition. I also love slaying monsters.
        
{/*         <p> <Button message="Dos" /></p>

        <p><Button message="hello"/></p>
 */}
        <ProfileCard />


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
