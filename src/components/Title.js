import '../css/title.css';
import logo from './logo.JPG'
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Title() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        < >
            {/* <h1 className="siteInfo">Civil Engineering Mcq</h1> */}
            <div className="siteInfo">
                <img src={logo} alt="Civil Engineering Mcq" style={{ width: '20rem' }}></img>
            </div>
            <div className='mainNav'>
                <nav className={
                    showMenu ? 'topNav responsive' : 'topNav'
                }>
                    <NavLink to='/'>SOM</NavLink>
                    <NavLink to='/structure'>Structure</NavLink>
                    <NavLink to='/rcc'>RCC</NavLink>
                    <NavLink to='/geotechnical'>Geotechnical</NavLink>
                    <NavLink to='/surveying'>Surveying</NavLink>
                    <NavLink to='/buildingMaterials'>Building Materials</NavLink>
                    <NavLink to='/estimation'>Estimation</NavLink>
                    <NavLink to='/constructionManagement'>Const. management</NavLink>
                    <NavLink to='/economics'>Economics</NavLink>
                    <NavLink to='/drawing'>Drawing</NavLink>
                    <NavLink to='/test'>Online Test</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>

                </nav>

                <div className='icon'>
                    <Hamburger direction="right" duration={0.6} toggled={showMenu} toggle={setShowMenu}></Hamburger>
                </div>
            </div>

        </>)
}
