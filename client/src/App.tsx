import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import LoggedIn from "./pages/LoggedIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App w-full">
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <SignInPage/>
            </Route>
            <Route path="/register">
              <LoggedIn/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
