import creatorwrk_logo from "../assets/images/creatorwrk_logo.png";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between">
      <div className="flex items-center gap-5">
        <img src={creatorwrk_logo} />
        <h3 className="text-center font-semibold">CREATORWRK</h3>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="hidden sm:block">
            <button className="border border-white-100 rounded-full px-8 py-2">
              <a href="/about" className="font-semibold">
                Login
              </a>
            </button>
          </li>
          <li>
            <button className="border border-blue-200 rounded-full px-8 py-2 bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900">
              <a
                href="/"
                className="bg-transparent font-semibold hidden sm:inline"
              >
                Sign Up
              </a>
              <a href="/" className="bg-transparent font-semibold sm:hidden">
                Register
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
