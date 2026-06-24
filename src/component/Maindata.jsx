import { createContext, useState } from "react" // imported create context from the react.

export const Data = createContext();// create context is exported form here because it helps to import in other component as a global data 




const Maindata = (props) => {
    const [DataArray, setDataArray] = useState([])
  return (
   <Data.Provider value={{DataArray,setDataArray}}> {// here the data has been sent to the all the component with the props drilling so, that every other component can used this
   }
    {props.children} {//here the children is App and App childeren is everycomponent that connects with the apps
    }
   </Data.Provider>
  )
}

export default Maindata; // main data has been exported