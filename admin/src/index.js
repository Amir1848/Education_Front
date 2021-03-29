import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalContext from './GlobalState/GlobalContext';
import App from './App';

ReactDOM.render(
    <GlobalContext.Provider value={{
        groups : []
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalContext.Provider>
    , document.getElementById("root"));