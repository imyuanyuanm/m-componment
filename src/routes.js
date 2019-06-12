import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { lazy } from 'react';
import { Provider } from "mobx-react";
import { Skeleton } from './skeleton';
import store from './store';

const About = lazy(() => import('./container/About/About'));
const Other = lazy(() => import('./container/Other/Other'));

export default () => {
    return <Provider store={store}>
        <Switch>
            <Suspense fallback={<Skeleton />}>
                <Route path='/' exact component={About} />
                <Route path='/other' exact component={Other} />
            </Suspense>
        </Switch>
    </Provider >
}