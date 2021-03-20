import React from "react";
import "./styles/index.scss";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ArticleItem from "./containers/ArticleItem";
import ArticlesPage from "./containers/ArticlesPage";
import TestPage from "./components/TestPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/articles/:id" component={ArticleItem} />
        <Route path="/articles/:id/:type" component={TestPage} />
      </Switch>
    </Router>
  );
};

export default App;
