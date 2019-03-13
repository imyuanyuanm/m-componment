import React, { lazy } from 'react';

const lazyImport = (conmonent) => {
  return lazy(() => new Promise((resolve, reject) => {
    conmonent.then(result => {
      resolve(result.default ? result : { default: result })
    })
      .catch(reject);
  }));
}

export default lazyImport