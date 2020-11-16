/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import ZoomableArticleContainer from "./components/ZoomableArticleContainer";
import ZoomableScoreBoard from './components/ZoomableScoreBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ZoomableArticleContainer} exact />
          <Route path="/score" component={ZoomableScoreBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
