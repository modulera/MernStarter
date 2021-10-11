import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// public pages
import Error from "./pages/Error";
import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ResetPass from './pages/Auth/ResetPass';

// admin pages layout(mui container)
import Layout from "./components/Layout";

// console.log(publicRoutes)
// import { useAuthState } from './context/auth';

function App() {
  // const authState = useAuthState();

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin/dashboard" />} />
        <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
        <Route path="/admin" component={Layout} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
