import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "./Assets/Images/logo.png"

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      
      <Link className="flex items-center hover:text-gray-900 dark:hover:text-white w-[148px]" to="/"> 
        <img src={Logo} alt="webgeniusitsolutions"/> 
      </Link>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link className="hover:text-gray-500 text-xl" to="/"> Home</Link>
        <Link className="hover:text-gray-500 text-xl" to="/about"> About</Link>
        <Link className="hover:text-gray-500 text-xl" to="/contact"> Contact</Link>
        <Link className="hover:text-gray-500 text-xl" to="/posts"> Blogs</Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link className="hover:text-gray-500" to="/"> Home</Link>
            <Link className="hover:text-gray-500" to="/about"> About</Link>
            <Link className="hover:text-gray-500" to="/contact"> Contact</Link>
            <Link className="hover:text-gray-500" to="/posts"> Blogs</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;