import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import NavBar from "./components/Navbar/NavBar"
// import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        {/* <AnimatePresence> */}
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* </AnimatePresence> */}
      </div>
    </Router>
  );
}

export default App;

// src/App.js

// import React from "react";
// import NavBar from "./components/NavBar";

// // New - import the React Router components, and the Profile page component
// import { Router, Route, Switch } from "react-router-dom";
// import Profile from "./components/Profile";
// import history from "./utils/history";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <div className="App">
//       {/* Don't forget to include the history module */}
//       <Router history={history}>
//         <header>
//           <NavBar />
//         </header>
//         <Switch>
//           <Route path="/" exact />
//           <PrivateRoute path="/profile" component={Profile} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;