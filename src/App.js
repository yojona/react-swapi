import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './views/Main'
import Details from './views/Details'

export default () =>{
  document.body.style.margin = 0

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/details/:id" component={Details} />
    </Router>
  );
}
