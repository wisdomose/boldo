import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { nav } from "../constants";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6">
      <div>
        <img src={Logo} alt="logo" width="162.22px" height="42px" />
      </div>
      <div>
        <ul className="hidden sm:grid grid-cols-[repeat(4,_max-content)] gap-[40px]">
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-sans text-white">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="bg-white font-bold rounded-full px-10 py-2 text-brand hover:shadow-custom"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <button className="text-white text-2xl md:hidden">
        <FiMenu />
      </button>
    </nav>
  );
}
