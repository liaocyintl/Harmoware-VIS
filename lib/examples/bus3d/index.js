import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import createSagaMiddleware from 'redux-saga';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/I18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './sagas';
import App from './containers';
import reducer from './reducers';
import '../../scss/harmoware.scss';
import './scss/bus3d.scss';
var sagaMiddleware = createSagaMiddleware();
var store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
render(React.createElement(Provider, { store: store },
    React.createElement(I18nextProvider, { i18n: i18n },
        React.createElement(App, null))), document.getElementById('app'));
//# sourceMappingURL=index.js.map