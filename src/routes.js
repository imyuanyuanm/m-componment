import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import lazyImport from './utils/lazyImport';
import { Provider } from "mobx-react";
// import { aboutStore } from './store';
import store from './store';

const About = lazyImport(import('./container/About/About'));
const Other = lazyImport(import('./container/Other/Other'));

export default () => {
    return <Provider store={store}>
        <Suspense fallback={<div className='router-loade'>Loading...</div>}>
            <Switch>
                <Route path='/' exact component={(props) => <About {...props} />} />
                <Route path='/other' exact component={(props) => <Other {...props} />} />
            </Switch>
        </Suspense >
    </Provider>
}