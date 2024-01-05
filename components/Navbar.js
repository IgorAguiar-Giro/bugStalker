import React, { useState } from "react"
import Button from "./Button"

export default function Navbar() {
  let Links = [
    {name: "Home", link:"/"},
    {name: "About", link:"/"},
    {name: "Sign in", link:"/"},
  ]

  let [open,setOpen] = useState(false);
    
  return(
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-display text-gray-800">
        <span className="text-3x1 text-indigo-600 mr-1 pt-2"><ion-icon size="large" name="bug-outline"></ion-icon></span>
        Bug Stalker
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>{
             Links.map((link)=>(
              <li key={link.name} className="md:ml-8 text-x1 font-display md:my-0 my-7">
                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
              </li>
              ))
            }
             <Button />
          </ul>
         
        </div>
    </div>
  )
}