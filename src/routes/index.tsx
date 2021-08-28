import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/memo" component={MemoScreen} />
        <Route path="/trash" component={TrashScreen} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
