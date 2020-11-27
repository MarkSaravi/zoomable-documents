/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Zoomable from "./components/Zooamble";
import ferdowsi from './data/Ferdowsi';
import colors from './data/color-tests';
import news00 from './data/news00';
import news01 from './data/news01';
import news02 from './data/news02';
import golang from './data/golang';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/news/0" component={() => (<Zoomable sentences={news00} />)} />
          <Route path="/news/1" component={() => (<Zoomable sentences={news01} />)} />
          <Route path="/news/2" component={() => (<Zoomable sentences={news02} />)} />
          <Route path="/colors" component={() => (<Zoomable sentences={colors} />)} />
          <Route path="/golang" component={() => (<Zoomable sentences={golang} />)} />
          <Route path="/farsi" component={() => (<Zoomable sentences={ferdowsi} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
