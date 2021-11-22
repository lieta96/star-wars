import logo from "./star-wars-logo.png";
import "./App.css";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="mt-5 App-logo" alt="logo" />
      </header>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
