import CartWidget from "../../common/cartWidget/CartWidget.jsx";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Inicio</h4>
      <ul className="Navbar">
        <li>productos</li>
        <li>contacto</li>
        <li>inicio</li>
      </ul>
      <CartWidget />
    </div>
  );
};
