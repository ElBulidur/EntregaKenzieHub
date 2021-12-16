import { Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Home} path="/login" />
      <Route component={Dashboard} path="/Dashboard" />
      <Route component={SignUp} path="/SignUp" />
    </BrowserRouter>
  );
};

export default Routes;
