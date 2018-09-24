/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/presentational/nav';
import * as Pages from './components/pages';
import './css/styles.css';

if (module.hot) {
  module.hot.accept();
}

// Create icon library
library.add(faBars, faTimes);

// define color schemes and other fun site vars
// const primaryColor = '';
// const secondaryColor = '';

const pages = [
  { path: '/blog', title: 'Blog', component: (<Pages.Blog />) },
  { path: '/about', title: 'About', component: (<Pages.About />) },
  { path: '/projects', title: 'Projects', component: (<Pages.Projects />) },
  { path: '/', title: 'Home', component: (<Pages.Home />) },
];

// Put react router at the top level
const MainApp = () => (
  <Router>
    <React.Fragment>
      <NavBar title="Daniel Ciotoli" links={pages} />
      <Switch>
        {pages.map(page => (
          <Route key={page.title} path={page.path} render={() => page.component} />
        ))}
      </Switch>
    </React.Fragment>
  </Router>
);
// render the app
render(<MainApp />, document.getElementById('app-root'));
