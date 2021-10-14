import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Quotes from "./components/Quote";

function App() {
  return (
    <div className="App">
      <div> NavBar </div>
      <Switch>
        <Route path='/quotes'>
          <Quotes/>
        </Route>

        <Route exact path='/'>
          <Redirect to='/quotes'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
