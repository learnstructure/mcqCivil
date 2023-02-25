import '../css/title.css';
import logo from './logo.JPG'
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Title() {
    const [showMenu, setShowMenu] = useState(false)
    function handleClick() {
        setShowMenu(false);
    }


    return (
        < >
            {/* <h1 className="siteInfo">Civil Engineering Mcq</h1> */}
            <div className="siteInfo">
                <img src={logo} alt="Civil Engineering Mcq" style={{ width: '15rem' }}></img>
            </div>
            <div className='mainNav'>
                <nav className={
                    showMenu ? 'topNav responsive' : 'topNav'
                }>
                    <NavLink to='/som' onClick={handleClick}>SOM</NavLink>
                    <NavLink to='/structure' onClick={handleClick}>Structure</NavLink>
                    <NavLink to='/rcc' onClick={handleClick}>RCC</NavLink>
                    <NavLink to='/geotechnical' onClick={handleClick}>Geotechnical</NavLink>
                    <NavLink to='/surveying' onClick={handleClick}>Surveying</NavLink>
                    <NavLink to='/buildingMaterials' onClick={handleClick}>Building Materials</NavLink>
                    <NavLink to='/estimation' onClick={handleClick}>Estimation</NavLink>
                    <NavLink to='/constructionManagement' onClick={handleClick}>Const. management</NavLink>
                    <NavLink to='/economics' onClick={handleClick}>Economics</NavLink>
                    <NavLink to='/drawing' onClick={handleClick}>Drawing</NavLink>
                    <NavLink to='/test' onClick={handleClick}>Online Test</NavLink>
                    <NavLink to='/contact' onClick={handleClick}>Contact Us</NavLink>

                </nav>

                <div className='icon'>
                    <Hamburger direction="right" duration={0.6} toggled={showMenu} toggle={setShowMenu}></Hamburger>
                </div>
            </div>

        </>)
}
