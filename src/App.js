import React from "react";
import { Provider } from "react-redux";
import store from "./Component/Redux /store";
import NavBar from "./Component/Nav";
import Main from "./Component/main/Main";
import Footer from "./Component/Footer";
import SingleMovie from "./Component/main/SingleMovie";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
function App() {
  // TODO deploy error cant fetch
  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/movie/:id" component={SingleMovie} />
          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
