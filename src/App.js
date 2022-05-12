import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style.css';
// import Delaycomp from './Delaycomp';
//dynamic loading Delaycomp will not import until it is ready to render .so that out bundle.js file size will reduce and performance will optimize
const Delaycomp = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('./Delaycomp')), 5000)
    )
);

export default function App() {
  return (
    <div>
      this is hi
      <Suspense fallback={<div>Loading....</div>}>
        <Delaycomp />
      </Suspense>
      <h1>another text</h1>
    </div>
  );
}
