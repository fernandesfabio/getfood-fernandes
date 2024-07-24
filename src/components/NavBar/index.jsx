import { FaBars } from "react-icons/fa6";
import logo from './../assets/images/get-food-icon.png';
import logoName from './../assets/images/getfood-name.png';
import {CartWidget} from "./../Cart/CartWidget";

function NavBar() {
 
  function togleBtn(){
    let dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle('top-16');
  }
  return (
    <div className="NavBar">
      <header className="flex justify-between h-16 items-center bg-[#0e1b45] shadow-xl gap-8 z-10 px-[6%]">
        <div className="flex justify-between items-center gap-1">
          <a href="#"><img className="w-[50px]" src={logo} /></a>
          <a  className="hidden md:block" href="#"><img className="w-[150px]" src={logoName} /></a>
        </div>
        <nav className="dropdown-menu absolute -top-full left-0 max-lg:bg-[#0e1b45] w-full flex flex-col gap-6 items-center py-2 shadow-xl lg:static lg:flex-row lg:justify-between lg:shadow-none">
          <ul className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8 lg:pl-10">
            <li className="text-xl font-bold text-gray-500 hover:text-[#fdf6e3]"><a href="#">Início</a></li>
            <li className="text-xl font-bold text-gray-500 hover:text-[#fdf6e3]"><a href="#">Cardápio</a></li>
            <li className="text-xl font-bold text-gray-500 hover:text-[#fdf6e3]"><a href="#">Sobre nós</a></li>
          </ul>
          <div>
            <a href="##" className=""><button className="text-xl text-[#0e1b45] bg-[#fdf6e3] hover:bg-white  px-3 py-2 font-bold border-0 rounded-lg lg:mr-4">Entrar</button></a>
          </div>
        </nav>
        <div className="flex justify-between items-center gap-4">
        <a href="#" className="text-gray-500 hover:text-[#fdf6e3] text-2xl font-bold"><CartWidget /></a>
        <button onClick={togleBtn} className="text-[#0e1b45] text-xl bg-[#fdf6e3] hover:bg-white p-2 rounded-full lg:hidden"><FaBars /></button>
        </div>
      </header>
        
    </div>
  );
}
export default NavBar;
