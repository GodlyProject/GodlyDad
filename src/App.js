import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quotes from "./components/Quote";

function App() {
  return (
    <div className="App">
      <div> NavBar </div>
      <div id='react-search'>Drop down bar
        one for the version of the bible,
        one for the book,
        one for the chapter,
        one for the verse(optional)</div>
      <Switch>
        <Route path='/quotes'>
          <Quotes />
        </Route>

        <Route exact path='/'>
          <Redirect to='/quotes' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
