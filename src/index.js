import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import mainStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore.store}>
      <PersistGate loading={null} persistor={mainStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
