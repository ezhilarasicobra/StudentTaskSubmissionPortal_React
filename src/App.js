import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth'
import Homepage from "./components/Homepage";
import { Dashboard } from "@material-ui/icons";

const App = () => {
  return (
    <BrowserRouter>
     <Container maxWidth="lg">
     <Navbar />
    <Switch>
      <Route path="https://tasksubmissiom.herokuapp.com/" exact component={Dashboard}/>
      <Route path="https://tasksubmissiom.herokuapp.com/home" exact component={Home}/>
      <Route path="https://tasksubmissiom.herokuapp.com/auth" exact component={Auth}/>
    </Switch>

    </Container>
    </BrowserRouter>
  );
};

export default App;
