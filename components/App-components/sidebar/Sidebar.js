import React from "react"

const Sidebar = () => {
  let Tabs = [
    {name: "Home", link:"/panel/bugStalker", icon:"home-outline" },
    {name: "Feed", link:"/panel/bugStalker/feed", icon:"newspaper-outline" },
    {name: "Reports", link:"/panel/bugStalker/reports", icon:"document-text-outline" },
    {name: "Calendar", link:"/panel/bugStalker/calendar", icon:"calendar-outline" },
    {name: "Projects", link:"/panel/bugStalker/projects", icon:"folder-outline" },
    {name: "Settings", link:"/panel/bugStalker/settings", icon:"settings-outline" },
  ]

  return (
  <>
  
    <div className="shadow-xl w-1/4 min-h-full sticky top-0  ">
      <div className="flex flex-col items-start bg-slate-900 min-h-screen absolute">
        <div className="border-b border-gray-600">
          <div className="flex font-bold items-center text-2xl cursor-pointer text-white mx-4 ">
            <span className="text-3xl text-indigo-600 mr-1 pt-2 pr-2 "><ion-icon size="large" name="bug-outline"></ion-icon></span>
            BugStalker
          </div>
        </div>
       
          <div className="text-zinc-400 mx-4 py-2">
            <ul>
             { Tabs.map((link)=>
             (
             <li key={link.name} className="flex items-center p-2">
                <a href={link.link} className="hover:text-red-400 duration-500 cursor-pointer "><ion-icon name={link.icon}></ion-icon></a>
                <a href={link.link} className="ml-2 hover:text-red-400 duration-500">{link.name}</a>
              </li>
              ))
              }
            </ul>
            
          </div>

      
    
      </div>

    </div>


<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  </>
  )
}

export default Sidebar