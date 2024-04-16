
import logo from "../assets/OIP.jpeg"
import CartWidget from "./CardWidget"
const NavBar = () => {

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <img src={logo} width={200} alt="Logo" />
        </div>
        <ul className="nav justify-content-end" > 
          <li className="nav-item">
            <a className="nav-link text-dark  " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Profesional</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Moda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark">Accesorios</a>
          </li>
        </ul>
        <div style={{ marginRight: '10px' }}> 
        <CartWidget></CartWidget>
      </div>
        </div>
      




    </>


  )
}
export default NavBar