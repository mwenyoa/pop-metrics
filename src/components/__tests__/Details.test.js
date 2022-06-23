import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Details from '../Details';

describe('Render metrics details component', () => {
  test('Test Details component  rendering properly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
