import { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
    const name = "Rahul";
    const Age = 18;

    return (
        <>
           <Data.Provider value={name}>
               <Data1.Provider value={Age}> 
                   <ComponentA />
               </Data1.Provider>
           </Data.Provider>
        </>
    )
}

export default App;