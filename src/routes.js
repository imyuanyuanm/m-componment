import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import lazyImport from './utils/lazyImport';

const About = lazyImport(import('./container/About/About'));
const Other = lazyImport(import('./container/Other/Other'));

export default () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path='/' exact component={(props) => <About {...props} />} />
            <Route path='/other' exact component={(props) => <Other {...props} />} />
        </Switch>
    </Suspense >
}