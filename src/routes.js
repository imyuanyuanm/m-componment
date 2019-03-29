import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import lazyImport from './utils/lazyImport';
import { Provider } from "mobx-react";
import { Skeleton } from './skeleton';
import store from './store';

const About = lazyImport(import('./container/About/About'));
const Other = lazyImport(import('./container/Other/Other'));


export default () => {
    return <Provider store={store}>
        <Switch>
            <Suspense fallback={<Skeleton />}>
                <Route path='/' exact component={(props) => <About {...props} />} />
                <Route path='/other' exact component={(props) => <Other {...props} />} />
            </Suspense>
        </Switch>
    </Provider >
}