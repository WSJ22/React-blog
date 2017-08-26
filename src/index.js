import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './components/Main';
import { AppContainer } from 'react-hot-loader';

// Render the main component into the dom
ReactDOM.render(<RouteConfig />, document.getElementById('app'));
if (module.hot) {
  module.hot.accept('./Rocomponents/Mainot', () => {
    const NewRoot = require('./components/Main').default;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
