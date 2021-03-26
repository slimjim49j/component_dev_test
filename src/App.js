import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "./content.json";

import Marquee from "./components/marquee/marquee.js";
import Header from "./components/header/header";

function App() {
  return (
    <>
    <Router>
      <Header pages={pages.map(({title, slug}) => ({title, slug })) } />
      <Switch>
        {
          pages.map(page => (
            <Route path={`/${page.slug}`} key={page.title}>
              <Marquee title={page.title} {...page.blocks[0]} />
            </Route>
          ))
        }
        <Route exact path="/">
          <Redirect to={`/${pages[0].slug}`} />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
