import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "./content.json";

import Marquee from "./components/marquee/marquee.js";
import Header from "./components/header/header";

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
