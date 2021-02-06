import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AddPost from './components/AddPost';
import ListPost from './components/ListPost';
import UpdatePost from './components/UpdatePost';
import store from './redux/store/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <h1 className="text-center">Challenge posts</h1>
        <Switch>
          <Route exact path="/">
            <AddPost />
            <ListPost />
          </Route>
          <Route exact path="/:id">
            <UpdatePost />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);
export default App;
