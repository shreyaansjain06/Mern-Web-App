import Navbar from './components/Navbar';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
   
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route >
      <ErrorPage/>
    </Route>
    </Switch>
    </>
  );
}

export default App;
