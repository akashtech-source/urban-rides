
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Ride from './components/Ride/Ride';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideDetails from './components/RideDetails/RideDetails';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <h1>Urban Rides</h1>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
      <div className="half-width">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/ride/:transport">Ride</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-button">Login</Link>
          <p>{loggedInUser.name}</p>
        </nav>
      </div>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          
          <PrivateRoute path='/ride/:transport'>
            <Ride></Ride>
          </PrivateRoute>
          <Route path="/detailride/:transport">
            <RideDetails></RideDetails>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
