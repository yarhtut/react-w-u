import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="example" component={Example} />
      <IndexRoute components={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);


// Weather ApiKey = 30c2630c1c94f740ad22e0c82e08833f
