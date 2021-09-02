import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import MemoPage from "../pages/memo";
import TrashPage from "../pages/trash";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/memo" component={MemoPage} />
        <Route path="/trash" component={TrashPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
