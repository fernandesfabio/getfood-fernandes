import "./style.css"

function NavBar() {
  return (
    <div className="NavBar flex justify-between p-3 ">
        <div>
          LOGO
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
    </div>
  );
}

export default NavBar;
