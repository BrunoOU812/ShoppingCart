import './styles.css';
import Principal from "./components/Principal";
import Form from "./components/Form";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <div className="header">
          <span className='header__logo'>A!</span>
          <nav className='header__nav'>
            <ul className='header__ul'>
              <li className='header__li'>
                <Link to="/">Home</Link>
              </li>
              <li className='header__li'>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='page'>
        <Switch>
          <Route  exact path="/" element={<Principal/>}/>
          <Route path="/add" element={<Form/> }/>
        </Switch>
      </div>
    </Router>
    <footer className='footer'>
      <a className='footer__a' target="blank" href="https://brunoou812.github.io/"><img className='footer__img' src="https://brunoou812.github.io/BMWD-logo-01.svg" alt="" /></a>
    </footer>
    </div>
  );
}

export default App;