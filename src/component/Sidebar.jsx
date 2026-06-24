import { useContext } from "react";
import { Theme } from "./Themechanger";

const Sidebar = ({ setPage, page }) => { // ✅ also accept current page

  const [theme] = useContext(Theme);
  //rather than making li again and again i tried to automate the using the Map() so, map() can be used for the array of list to loop over the all element of the all object of the array.
  const menuItems = [
    { name: "dashboard", icon: "ri-dashboard-line", label: "Dashboard" },
    { name: "addSession", icon: "ri-add-circle-line", label: "Add Sessions" },
    { name: "allSessions", icon: "ri-menu-line", label: "All Sessions" },
    { name: "settings", icon: "ri-settings-3-line", label: "Setting" },
  ];

  return (
    <div className="h-screen border-r border-gray-300">
      <aside>
        <nav>
          <h1 className="text-3xl font-medium p-5">studyFlow</h1>
          <ul className="text-xl font-normal pt-2 px-3 flex flex-col gap-1 w-60 ">


            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setPage(item.name)}
                className={`py-2 rounded-2xl pl-3 flex items-center gap-2 cursor-pointer 
                  ${page === item.name ? "bg-black text-white" : "hover:bg-black hover:text-white"}`} >  

                <i className={item.icon}></i> {item.label}

              </li>


            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

//${page === item.name ? "bg-black text-white" : "hover:bg-black hover:text-white"}`} >   this line feels confusing but this is also one the ternary operator using in this project if the page name is equals to the item.name then true gives  and false gives hover blackcolor and white text. this is the use of the tailwind css.


export default Sidebar;
