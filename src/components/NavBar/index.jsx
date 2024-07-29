import { FaBars, FaX } from "react-icons/fa6";
import logo from './../assets/images/get-food-icon.png';
import logoName from './../assets/images/getfood-name.png';
import {CartWidget} from "./../Cart/CartWidget";
import React, {useState} from "react";

function NavBar() {

  const [showMenu, setshowMenu] = useState(false)
  let Links = [
    {name:"Início",link:"/"},
    {name:"Cardápio",link:"/"},
    {name:"Sobre nós",link:"/"}
  ]

  return (
    <div className="NavBar">
      <header className="flex justify-between h-16 items-center bg-[#0e1b45] shadow-xl gap-8 z-10 px-[6%]">
        <div className="flex justify-between items-center gap-1">
          <a href="#"><img className="w-[50px]" src={logo} /></a>
          <a  className="hidden lg:block" href="#"><img className="w-[150px]" src={logoName} /></a>
        </div>
        <nav className={`absolute -top-full left-0 max-lg:bg-[#0e1b45] w-full flex flex-col gap-6 items-center py-2 shadow-xl lg:static lg:flex-row lg:justify-between ${ showMenu ? "top-full" : "top-16"} `}>
          <ul className="flex flex-col items-center justify-between lg:flex-row gap-8 lg:ml-[30%]">
          {
            Links.map((link)=>(
              <li key={link.name} className="text-xl font-bold list-none">
                <a href={link.link}className="text-gray-500 hover:text-[#fdf6e3] duration-500">{link.name}</a>
              </li>

            ))
          }
          </ul>
          
          <div>
            <a href="##" className=""><button className="text-xl text-[#0e1b45] bg-[#d8d3c7] hover:bg-[#fdf6e3] duration-500 px-3 py-2 font-bold border-0 rounded-lg lg:mr-4">Entrar</button></a>
          </div>
        </nav>
        <div className="flex justify-between items-center gap-4">
        <a href="#" className="text-gray-500 hover:text-[#fdf6e3] duration-500 text-2xl font-bold"><CartWidget /></a>
        <button onClick={() => setshowMenu(!showMenu)} className="text-[#0e1b45] text-xl bg-[#d8d3c7] hover:bg-[#fdf6e3] p-2 rounded-full lg:hidden">
          {
            showMenu ?(
              <FaBars />
            ): (
              <FaX />
            )
          }
        </button>
        </div>
      </header>
        
    </div>
  );
}
export default NavBar;
