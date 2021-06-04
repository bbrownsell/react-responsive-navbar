import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
