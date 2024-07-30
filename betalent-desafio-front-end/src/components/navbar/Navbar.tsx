import Image from 'next/image';
import BeLogo from '../../../public/Fundo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image
        src={BeLogo}
        alt="Image"
        className="navbar__image"
        width={44}
        height={35}
      />
    </nav>
  );
};

export default Navbar;
