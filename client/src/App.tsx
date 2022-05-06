import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/Auth/SignInPage";
import SignUp from "./pages/Auth/SignUpPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App w-full">
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <SignUp />
            </Route>
            <Route path="/register">
              <SignInPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
