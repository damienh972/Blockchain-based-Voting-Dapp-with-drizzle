# Build your own voting session on test blochain

## Requires 

 Ganache [https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache) (as test blockchain)
 
 Metamask [https://metamask.io/](https://metamask.io/) or directly in browser extensions (for accounts switch)
 
 Both linked, this can help :wink: (https://www.trufflesuite.com/docs/truffle/getting-started/truffle-with-metamask)
 
## Get started

There is smartcontract in solidity language and front-end interface in React framework.

You have to first link your local server with ganache [https://www.trufflesuite.com/docs/ganache/reference/ganache-settings](https://www.trufflesuite.com/docs/ganache/reference/ganache-settings)

Then deploy your contract instance on Ganache test blokchain, in the project directory, run:

`truffle migrate --reset`

This will instantiate a new voting contract with your Ganache account as owner.

Now we can launch the interface, in the client root folder, run:

`yarn ` or  `npm install` it will install all project dependencies, then run :

`yarn start` or  `npm run start`

## Available Scripts

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


 

 
 

