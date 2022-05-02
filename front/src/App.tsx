import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import cn from 'classnames';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <div></div>
            </Route>
            <Route path="/users">
              <div className={cn("text-9xl flex text-blue")}>
                dfdfdff
              </div>
            </Route>
            <Route path="/">
              <div></div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
