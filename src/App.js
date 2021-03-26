import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "./content.json";

import Marquee from "./components/marquee/marquee.js";
import Header from "./components/header/header";

/*
 * App sets up the different routes for the different pages,
 * Each page is a marquee component that is populated via props.
 * 
 * initialLoad is used to create a CSS class that will trigger build-in
 * animations on the initial page load or on refresh
 */
function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => setInitialLoad(false), 1100);
  }, []);

  return (
    <Router>
      <div className={initialLoad ? "initial-load" : ""}>
        <Header pages={pages.map(({ title, slug }) => ({ title, slug }))} />
        <Switch>
          {
            pages.map(page => (
              <Route path={`/${page.slug}`} key={page.title}>
                <Marquee
                  title={page.title}
                  {...page.blocks[0]}
                />
              </Route>
            ))
          }
          <Route exact path="/">
            <Redirect to={`/${pages[0].slug}`} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
