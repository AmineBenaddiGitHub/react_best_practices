import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from '../reducers'

export const history = createBrowserHistory();

export default function configureStore() {
    // @ts-ignore
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
            applyMiddleware(thunk),
        )
    );
    // Hot reloading
    // @ts-ignore
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        // @ts-ignore
        module.hot.accept('../reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store
}