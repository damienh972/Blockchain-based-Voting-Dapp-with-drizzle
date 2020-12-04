import React from "react";
import { DrizzleContext  } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "../../drizzleOptions";
import Dapp from "../Dapp";

// import LoadingContainer from "./LoadingContainer.js";

const drizzle = new Drizzle(drizzleOptions);
//const { DrizzleProvider } = drizzleReactHooks;
const App = () => {

  return (
    // <DrizzleProvider drizzle={drizzle}>
    //   <LoadingContainer>
    //     <Dapp drizzle={drizzle} />
    //     <div>yytest</div>
    //   </LoadingContainer>
    // </DrizzleProvider>
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const {drizzle, drizzleState, initialized} = drizzleContext;
          if(!initialized) {
            return "Loading..."
          }
          return (
            <Dapp drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  )

}

export default App;
