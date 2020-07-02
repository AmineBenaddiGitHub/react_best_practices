import React from 'react';
import Presentation from './components/presentation'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

export const store = configureStore();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Presentation/>
            </Provider>
        </div>
    );
}

export type AppDispatch = typeof store.dispatch;
export default App;
