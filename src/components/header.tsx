import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/logos/main-logo.svg";

const Header = () => {

  const links = [
    {
      id: 1,
      name: "Localización",
      url: "#localizacion",
    },
    {
      id: 2,
      name: "Transporte",
      url: "#transporte",
    },
    {
      id: 3,
      name: "Alojamiento",
      url: "#alojamiento",
    },
    {
      id: 4,
      name: "Sitios de Interés",
      url: "#sitios-de-interes",
    },
    {
      id: 5,
      name: "Música",
      url: "#musica",
    },
    {
      id: 6,
      name: "Regalo",
      url: "#regalo",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 p-5">
      <div className="mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="h-8" />
        <nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white z-50 relative">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-5">
            {
              links.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="text-white hover:text-gold transition-all duration-200 text-sm">{link.name}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      {/* MOBILE */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40">
          <div className="bg-white rounded-lg w-10/12 py-6 mx-4">
            <ul className="space-y-4 text-center">
              {
                links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="text-black hover:text-gold transition-all duration-200 text-lg" onClick={toggleMenu}>{link.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;