/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Zoomable from "./components/Zooamble";
import ferdowsi from './data/Ferdowsi';
import golang from './data/golang';
import ww2 from './data/ww2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/golang" component={() => (<Zoomable sentences={golang} />)} />
          <Route path="/farsi" component={() => (<Zoomable sentences={ferdowsi} />)} />
          <Route path="/ww2" component={() => (<Zoomable sentences={ww2} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
