import React, { Fragment } from 'react';

import Main from './Components/Containers/Main';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Fragment>
            <Main/>  
            <ToastContainer/>   
        </Fragment>
    );
}

export default App;