import { FaBars } from "react-icons/fa6";
import logo from './../assets/images/getfood-logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <header className="flex justify-between px-12 h-18 items-center bg-[#24252a] shadow-xl">
        <div>
          <a href="#"><img className="w-[250px] p-3" src={logo} /></a>
        </div>
        <nav className="flex justify-between items-cente gap-6">
          <ul className=" flex items-center gap-6">
            <li className="text-orage-bg text-xl font-bold text-white hover:underline underline-offset-4"><a href="#">Início</a></li>
            <li className="text-orage-bg text-xl font-bold text-white hover:underline underline-offset-4"><a href="#">Cardápio</a></li>
            <li className="text-orage-bg text-xl font-bold text-white hover:underline underline-offset-4"><a href="#">Sobre nós</a></li>
          </ul>
          <div className=" flex  items-center gap-6">
          <a href="##" className="text-xl text-white bg-gradient-to-tr from-purple-bg to-orange-bg px-3 py-2 font-bold border-0 rounded-lg"><button>Entrar</button></a>
        </div>
        </nav>
        
        <div >
        <button className="text-white text-2xl bg-gradient-to-tr from-purple-bg to-orange-bg p-3 rounded-full"><FaBars /></button>
        </div>
      </header>
        
    </div>
  );
}
export default NavBar;
