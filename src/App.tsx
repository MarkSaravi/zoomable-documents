/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import Ferdowsi from "./Pages/Ferdowsi";
import News from './Pages/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Ferdowsi} exact />
          <Route path="/news/:day" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
