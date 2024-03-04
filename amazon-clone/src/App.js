import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import { useEffect  } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Providers/StateProvider';
import Checkout from './components/Checkout';

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(()=>{
      // will only run once when the app component loads...

      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>> ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
  
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
  },[]);
  return (
  //  <h1>Amazon Clone</h1> 
  <div className='app'>
    <Router>
      <Switch>

      <Route path='/checkout'>
          <Checkout />
        </Route>

      <Route path='/login'>
          <Login />
        </Route>

        <Route path='/'>
          <Header/>
          <Home />
          </Route>
          
      </Switch>
    </Router>
  </div>
  );
}

export default App;
