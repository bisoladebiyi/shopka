import logo from "../images/logo.svg"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} alt=""/>
            <div>
                <button className="nav-button">Sign in</button>
                <button className="nav-button">My Cart</button>
            </div>
           
        </div>
     );
}
 
export default Navbar;