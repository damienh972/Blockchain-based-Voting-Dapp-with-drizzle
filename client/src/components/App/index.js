import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from '../../drizzleOptions';
import Dapp from '../Dapp';
import './app.scss';

const drizzle = new Drizzle(drizzleOptions);
console.log(drizzle);
const { ethereum } = window;
const test = async() => {
  const testM = await ethereum.request({ method: 'eth_requestAccounts' });
  console.log(testM);
};
test();

const App = () => (
  <DrizzleContext.Provider drizzle={drizzle}>
    <DrizzleContext.Consumer>
      {(drizzleContext) => {
        const { drizzleState, initialized } = drizzleContext;
        if (!initialized) {
          return 'Loading...';
        }
        return (
          <Dapp drizzle={drizzle} drizzleState={drizzleState} />
        );
      }}
    </DrizzleContext.Consumer>
  </DrizzleContext.Provider>
);

export default App;
