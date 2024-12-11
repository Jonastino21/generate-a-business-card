import "./navbar.css";
const Navbar = ({ openModal }) => {
    
    return ( 
        <header className="header">
            <a href="logo" className="logo">Miz'<span className="span">A</span>rt <span>Tech</span></a>
           <i className="fa-solid fa-bars" id="menu-icon" ></i>
        <nav className="navbar">
            <li><a href="#Apropos">About Me</a></li>
            <li><a href="#CarteVisite" onClick={openModal} >Generate a business card</a></li>
            <li><a href="#Contact">Contact Me</a></li>
            <li><a href="https://docs.google.com/document/d/1mJp965EWkc1H154GbDfad7YAcD_PbjCYdZ4I7N-jrQY/edit?usp=sharing">My CV</a></li> 
        </nav>
        </header>
    ) 
}
 
export default Navbar;
