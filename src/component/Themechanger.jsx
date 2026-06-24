
// this helps to import the module of the Createcontext and usestate at once.
import { createContext, useState } from "react";


// not only creating context but as well exporting them helps to reach to the all component
export const Theme = createContext(); 

const Themechanger = (props) => {

   // adding the default theme as light
  const [theme, setTheme] = useState("light"); 

  return (
    //const Theme is here with the module provides wher ewe have given the array of the theme and setTheme.  here we are acessing the app.jsx which we have wrap with <Themechanger> </Themechanger> in the main.
    <Theme.Provider value={[theme, setTheme]}>
      {props.children}
    </Theme.Provider>  
  );
};

export default Themechanger;
