import logo from '../../style/images/nav-image.png';
import '../../style/Header.css';

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="nav-image" />
      </header>
    </div>
  );
}

export default Header;
