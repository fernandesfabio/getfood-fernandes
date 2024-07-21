import { FaBars } from "react-icons/fa6";
import logo from './../assets/images/getfood-logo.png';
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
 
  function togleBtn(){
    let dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle('top-16');
  }
  return (
    <div className="NavBar">
      <header className="flex justify-between px-12 h-16 items-center bg-[#ffffff30] shadow-xl gap-8">
        <div>
          <a href="#"><img className="w-[250px]" src={logo} /></a>
        </div>
        <nav className="dropdown-menu absolute -top-full left-0 max-lg:bg-[#ffffff30] w-full flex flex-col gap-6 items-center py-2 shadow-xl lg:static lg:flex-row lg:justify-between lg:shadow-none">
          <ul className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8 lg:pl-10">
            <li className="text-xl font-bold text-gray-500 hover:text-orange-bg"><a href="#">Início</a></li>
            <li className="text-xl font-bold text-gray-500 hover:text-orange-bg"><a href="#">Cardápio</a></li>
            <li className="text-xl font-bold text-gray-500 hover:text-orange-bg"><a href="#">Sobre nós</a></li>
          </ul>
          <div>
            <a href="##" className=""><button className="text-xl text-white bg-red-400 hover:bg-gradient-to-tr from-purple-bg to-orange-bg  px-3 py-2 font-bold border-0 rounded-lg lg:mr-4">Entrar</button></a>
          </div>
        </nav>
        <div className="flex justify-between items-center gap-4">
        <a href="#" className="text-gray-500 hover:text-black text-2xl font-bold"><FaCartShopping /></a>
        <button onClick={togleBtn} className="text-white text-xl bg-red-400 hover:bg-gradient-to-tr from-purple-bg to-orange-bg p-2 hover:bg-orange-bg rounded-full lg:hidden"><FaBars /></button>
        </div>
      </header>
        
    </div>
  );
}
export default NavBar;
