import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";

import About from './container/About/About';

const Test = lazy(() => import( /* webpackChunkName: 'test' */'./container/Test/Test'));
const Test1 = lazy(() => import( /* webpackChunkName: 'test1' */'./container/Test1/Test1'));

export default () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path='/' exact component={(props) => <About {...props} />} />
            <Route path='/test' exact component={(props) => <Test {...props} />} />
            <Route path='/test1' exact component={(props) => <Test1 {...props} />} />
        </Switch>
    </Suspense >
}