import React, {useState} from "react";
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = setClick(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else
        setButton(true);
    }
    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <link to='/' className='nav-links' onClick={closeMobileMenu}>Home</link>
                        </li>
                        <li className='nav-item'>
                            <link to='/Evnts' className='nav-links' onClick={closeMobileMenu}>Events</link>
                        </li>
                        <li className='nav-item'>
                            <link to='/Organizer' className='nav-links' onClick={closeMobileMenu}>Organizer</link>
                        </li>
                        <li className='nav-item'>
                            <link to='/Account' className='nav-links-mobile' onClick={closeMobileMenu}>Account</link>
                        </li>
                    </ul>
                        {Button && <Button>Account</Button>}
                </div>
            </nav>
        </>
    );
}


export default Navbar