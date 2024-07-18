import "./style.css"

function NavBar() {
  return (
    <div className="NavBar flex justify-between px-12 h-16 items-center">
        <div>
          Get<spam className="text-blue-500">Food</spam>
        </div>
        <nav>
          <ul className="flex gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalago</a></li>
            <li><a href="#">Sobre nós</a></li>
          </ul>
        </nav>
        <div>
          <a href="##" className="bg-blue-500 p-3 border-0 rounded-lg"><button>Login</button></a>
        </div>
        <div className="bg-blue-300 p-2 rounded-full">
        <i class="fa-solid fa-bars"></i>
        </div>
    </div>
  );
}

export default NavBar;
