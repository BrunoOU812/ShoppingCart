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
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route  exact path="/" element={<Principal/>}/>
          <Route path="/add" element={<Form/> }/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Switch>
      </div>
          {/* <Principal/> */}
    </Router>
    </div>
  );
}

function Home() {
  return (
    <div className='container'>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div className='container'>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className='container'>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
