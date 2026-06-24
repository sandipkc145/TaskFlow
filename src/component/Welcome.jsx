import { useContext } from "react";
import { Theme } from "./Themechanger";

const Welcome = () => {
  const [theme, setTheme] = useContext(Theme); 

  return (
    <div className="px-5 py-2 border-b border-gray-300 h-20 flex justify-between">
      <div>
        <h1 className="text-xl font-normal">Welcome to StudyFlow</h1>
        <p className="text-gray-600">Track your study habit and stay productive!!!</p>
      </div>
      <button
      // this is the ternary operator using here, meaning if the theme is equals to light gives true then dark false gives light. here onclick event is using to change the settheme 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        
        className="h-10 w-10 hover:bg-black hover:text-white rounded-xl border-2 cursor-pointer"
      >
        <i className="ri-moon-fill"></i>
      </button>
    </div>
  );
};

export default Welcome;
