import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import thunk from "redux-thunk";
import {rootReducer} from "base/reducers";
import {MasterLayout, SingleLayout} from 'layout';
import {HomePage, SigninPage, UiGeneral, UiIcon, UiButton, UiSlider, UiModal, Form, FormAdvance} from 'pages';

const store = createStore(rootReducer, applyMiddleware(thunk));

// Create an enhanced history that syncs navigation events with the store

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route component={SingleLayout}>
          <Route path="/login" component={SigninPage}/>
        </Route>
        <Route component={MasterLayout}>
          <Route path="/" component={HomePage}/>
          <Route path="/ui" component={UiGeneral}/>
          <Route path="/ui-icon" component={UiIcon}/>
          <Route path="/ui-button" component={UiButton}/>
          <Route path="/ui-slider" component={UiSlider}/>
          <Route path="/ui-modal" component={UiModal}/>
          <Route path="/form" component={Form}/>
          <Route path="/form-advance" component={FormAdvance}/>
        </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
