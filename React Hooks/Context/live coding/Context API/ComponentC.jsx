import { Data, Data1 } from "./App";

const ComponentC = () => {
    return (
        <>
           <Data.Consumer>
               {(name) => {
                   return (
                       <Data1.Consumer>
                           {(Age) => {
                               return (
                                   <h1> My namee is {name} & I'm {Age} years old</h1>
                               )
                           }}
                       </Data1.Consumer>
                   )
               }}
           </Data.Consumer>
        </>
    )
}

export default ComponentC;