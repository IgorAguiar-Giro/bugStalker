import { useState, React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const Tabs = [
    {
      name: "Home",
      link: "/panel/bugStalker",
      icon: "home-outline",
      gap: false,
    },
    {
      name: "Feed",
      link: "/panel/bugStalker/feed",
      icon: "newspaper-outline",
      gap: false,
    },
    {
      name: "Reports",
      link: "/panel/bugStalker/reports",
      icon: "document-text-outline",
      gap: true,
    },
    {
      name: "Calendar",
      link: "/panel/bugStalker/calendar",
      icon: "calendar-outline",
      gap: false,
    },
    {
      name: "Projects",
      link: "/panel/bugStalker/projects",
      icon: "folder-outline",
      gap: false,
    },
    {
      name: "Settings",
      link: "/panel/bugStalker/settings",
      icon: "settings-outline",
      gap: true,
    },
  ];

  return (
    <nav
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
    >
      <div
        className={`${
          !open && "rotate-180"
        }  absolute flex items-center justify-center cursor-pointer rounded-full border-2 border-black bg-white text-indigo-600 -right-3 top-9 w-7 h-7`}
        onClick={() => setOpen(!open)}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <div className="flex gap-x-4 items-center">
        <logo className={`text-indigo-600 cursor-pointer duration-500`}>
          <ion-icon size="large" name="bug-outline"></ion-icon>
        </logo>
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          BugStalker
        </h1>
      </div>
      <ul className="pt-6">
        {Tabs.map((link) => (
          <Link href={link.link}>
            <li
              key={link.name}
              className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-light-white rounded-md ${
                link.gap ? "mt-9" : "mt-2"
              } ${router.pathname === link.link ? "bg-light-white" : " "}`}
            >
              <icon className="text-indigo-300">
                <ion-icon name={link.icon}></ion-icon>
              </icon>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>

    //
  );
};

export default Sidebar;
