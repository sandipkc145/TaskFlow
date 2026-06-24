// Importing useContext and useState for using them in the app.jsx
import { useContext,useState } from "react";

import Sidebar from "./component/Sidebar";
// importing Const Theme from the Themchanger so, that it could be use as the id then css can be given in the index.css.
import { Theme } from "./component/Themechanger";
import Hero from "./component/hero/Hero";

const App = () => {
  // finally using the theme which we have passed in the array with the help of the array destructuring.
  const [theme] = useContext(Theme);
  
  const [page, setPage] = useState("dashboard"); 

  return (
    //this is the parent div which we need to change the theme so, id is given. button of theme changer is in the Welcome.jsx
    <div id={theme} className="flex">
      <Sidebar setPage={setPage} page={page} />
        <Hero page={page} />

    </div>
  );
};

export default App;
