import Logo from "/main-logo.svg";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-5">
            <li>
              <a href="#localizacion" className="text-white text-sm">Localización</a>
            </li>
            <li>
              <a href="#transporte" className="text-white text-sm">Transporte</a>
            </li>
            <li>
              <a href="#alojamiento" className="text-white text-sm">Alojamiento</a>
            </li>
            <li>
              <a href="#sitios-de-interes" className="text-white text-sm">Sitios de Interés</a>
            </li>
            <li>
              <a href="#musica" className="text-white text-sm">Música</a>
            </li>
            <li>
              <a href="#regalo" className="text-white text-sm">Regalo</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
