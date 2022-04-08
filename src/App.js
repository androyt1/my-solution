import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import Task from "./Task";
import {Provider} from 'react-redux'
import store from './store/store'


const App = () => {
  return (
    <React.StrictMode>
      <>
      <Provider store={store}>
        <Navigation />
        <Router>
          <Dashboard path="/" />
          <Task path="/task" />
        </Router>
      </Provider>
      </>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
