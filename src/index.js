import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImagesListScreen from './components/ImagesListScreen'
import ImageDetailsScreen from "./components/ImageDetailsScreen";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './components/lib/reducer';

const middleware = applyMiddleware(reduxThunk);
const store      = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={ImagesListScreen} />
      <Route exact path="/detail/" component={ImageDetailsScreen} />
      <Route exact path="/detail/:id" component={ImageDetailsScreen} />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
