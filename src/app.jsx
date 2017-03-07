import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import NoMatch from './nomatch/nomatch.jsx';
import './index.scss';

export default class App extends React.Component {
  render() {
    return (

      <Router history={browserHistory}>

        <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./welcome/welcome.jsx').default);
          })
        }} />
        <Route path="canvas" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/canvas.jsx').default);
          })
        }} />
        <Route path="browse" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./browse/browse.jsx').default);
          })
        }} />
        <Route path="template1" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateOne.jsx').default);
          })
        }} />
        <Route path="template2" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateTwo.jsx').default);
          })
        }} />
        <Route path="template3" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateThree.jsx').default);
          })
        }} />
        <Route path="template4" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateFour.jsx').default);
          })
        }} />
        <Route path="template5" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateFive.jsx').default);
          })
        }} />
        <Route path="template6" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateSix.jsx').default);
          })
        }} />
        <Route path="template7" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateSeven.jsx').default);
          })
        }} />
        <Route path="template8" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./canvas/templateEight.jsx').default);
          })
        }} />
        <Route path="*" component={NoMatch}/>
      </Router>

    )
  }
}
