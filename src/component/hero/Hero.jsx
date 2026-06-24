import Welcome from "../Welcome";
import Dashboard from "../Dashboard/Dashboard";
import Mainsession from "../Session/Mainsession";
import Mainsetting from "../seting/Mainsetting";
import All_session from "../All_session/All_session";

const Hero = ({ page }) => {
  return (
    <div className="w-full">
      <Welcome />   {/* always visible */}

      {page === "dashboard" && <Dashboard />}
      {page === "addSession" && <Mainsession />}
      {page === "settings" && <Mainsetting />}
      {page === "allSessions" && <All_session />}
    </div>
  );
};

// {page === "dashboard" && <Dashboard />} this code means if the page is equals to dashboard call the Dashboard this is the use of and logical operator in the react

export default Hero;
