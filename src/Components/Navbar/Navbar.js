import {NavLink} from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ setIntroModalOpen, }) => {
    return (
        <header>
            <nav>
                <NavLink to="/" exact activeClassName="selected" className="item"><span onClick={() => {
                    setIntroModalOpen(true);
                }}>Home</span></NavLink>
                <NavLink to="/Map" activeClassName="selected" className="item">Map</NavLink>
                <NavLink to="/CustomSearch" activeClassName="selected" className="item">Custom Search</NavLink>
            </nav>
        </header>

        
    )
}

export default Navbar
