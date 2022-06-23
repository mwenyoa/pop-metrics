import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Navbar';
import store from '../../redux/configureStore';
import Category from '../Category';

describe('Render components', () => {
  test('Test render navbar properly rendering', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Test home page properly rendering', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Category />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
