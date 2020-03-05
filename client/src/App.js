import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import TopNav from "./components/TopNav/TopNav"
import UserProvider from "./context";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <UserProvider>
    <Router>
      <div>
        <TopNav/>
        {/* <AnimatePresence> */}
        <Switch>
        <Route exact path="/" component={About} />
              <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={() => <Auth action="signup" />}  />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
        </Switch>
        {/* </AnimatePresence> */}
      </div>
    </Router>
    </UserProvider>
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