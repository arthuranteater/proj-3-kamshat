import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import "./App.css";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <AnimatePresence>
        <Switch>
          <Route exact path={["/", "/main"]}>
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
