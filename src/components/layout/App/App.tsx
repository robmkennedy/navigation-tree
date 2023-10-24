import { Provider } from 'react-redux';
import MainPanel from 'components/layout/MainPanel/MainPanel';
import store from 'state/store';
import './App.scss';

/**
 * The top-level app component. For this simple app, it only consists of the 
 * main panel which takes up the rest of the body.
 * It is wrapped in a Provider used by react-redux for state handling.
 */
const App = () => {

    return (
        <Provider store={store}>
            <div id='app'>
                <MainPanel />
            </div>
        </Provider>
    );
}

export default App;
