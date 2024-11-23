// COMPONENTS
import Logo from "/logos/main-logo.svg";

const Header = () => {

  return (
    <footer className="flex flex-row justify-between items-center w-full py-6 border-t border-t-gray-200 bg-transparent">
      <img className="brightness-0" src={Logo} width={20} alt="Logo" />
      <p className="text-right text-md font-inter text-black">Javier & Esther | 2025</p>
    </footer>
  );
};

export default Header;
