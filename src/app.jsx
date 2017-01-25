import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Welcome from './welcome/welcome.jsx';
import Canvas from './canvas/canvas.jsx';
import Browse from './browse/browse.jsx';
import Layout from './layout.jsx';

import TemplateOne from './canvas/templateOne.jsx';
import TemplateTwo from './canvas/templateTwo.jsx';
import TemplateThree from './canvas/templateThree.jsx';
import TemplateFour from './canvas/templateFour.jsx';
import TemplateFive from './canvas/templateFive.jsx';
import TemplateSix from './canvas/templateSix.jsx';
import TemplateSeven from './canvas/templateSeven.jsx';
import TemplateEight from './canvas/templateEight.jsx';

export default class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>
          <Route path="/" component={Welcome} />
          <Route path="canvas" component={Canvas} />
          <Route path="browse" component={Browse} />
          {/* <Route path="*" component={NoMatch}/> */}
          <Route path="template1" component={TemplateOne} />
          <Route path="template2" component={TemplateTwo} />
          <Route path="template3" component={TemplateThree} />
          <Route path="template4" component={TemplateFour} />
          <Route path="template5" component={TemplateFive} />
          <Route path="template6" component={TemplateSix} />
          <Route path="template7" component={TemplateSeven} />
          <Route path="template8" component={TemplateEight} />
      </Router>

    )
  }
}
