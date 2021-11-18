import logo from './star-wars-logo.png';
import './App.css';
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={500} className="App-logo" alt="logo" />
        <Home/>
      </header>
      
    </div>
  );
}

export default App;
