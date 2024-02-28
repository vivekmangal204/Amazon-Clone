import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
  //  <h1>Amazon Clone</h1> 
  <div className='app'>
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        {/* <Route path='/cart'>

        </Route> */}
      </Switch>
    </Router>
  </div>
  );
}

export default App;
