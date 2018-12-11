import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HelmetHead from './Components/HelmetHead';
import Header from './Components/Header';
import Main from './Components/Main';

const App = () => (
    <CssBaseline>
        <div>
            <HelmetHead />
            <Header />
            <Main />
        </div>
    </CssBaseline>
);

export default App;
