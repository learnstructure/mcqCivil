import '../css/title.css';
import logo from './logo.JPG'
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io'
export default function Title() {
    const [showMenu, setShowMenu] = useState(false)
    function handleClick() {
        setShowMenu(false);
    }
    return (
        < >
            {/* <h1 className="siteInfo">Civil Engineering Mcq</h1> */}
            <div className="siteInfo">
                <NavLink to='/'>
                    <img src={logo} alt="Civil Engineering Mcq" style={{ width: '15rem' }}></img>
                </NavLink>
            </div>
            <div className='mainNav'>
                <nav className={
                    showMenu ? 'topNav responsive' : 'topNav'
                }>
                    {/* <img src='/favicon.JPG' alt="website logo" className='logo' /> */}
                    <div className='logo'>civilengineering-mcq</div>
                    <div className='dropdown'>
                        <div className='link-copy'>
                            <div> Technical MCQs <IoIosArrowDropdownCircle className='drop-icon' /></div>

                        </div>
                        <div className="dropdown-content"  >
                            <NavLink to='/som' onClick={handleClick}>Strength of Materials</NavLink>
                            <NavLink to='/structure' onClick={handleClick}>Structure</NavLink>
                            <NavLink to='/rcc' onClick={handleClick}>RCC</NavLink>
                            <NavLink to='/geotechnical' onClick={handleClick}>Geotechnical</NavLink>
                            <NavLink to='/surveying' onClick={handleClick}>Surveying</NavLink>
                            <NavLink to='/buildingMaterials' onClick={handleClick}>Building Materials</NavLink>
                            <NavLink to='/estimation' onClick={handleClick}>Estimation</NavLink>
                            <NavLink to='/constructionManagement' onClick={handleClick}>Const. management</NavLink>
                            <NavLink to='/economics' onClick={handleClick}>Engineering Economics</NavLink>
                            <NavLink to='/drawing' onClick={handleClick}>Engineering Drawing</NavLink>
                            <NavLink to='/professional' onClick={handleClick}>Professional Practice</NavLink>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='link-copy'>
                            <div> General Knowledge <IoIosArrowDropdownCircle className='drop-icon' /></div>

                        </div>
                        <div className="dropdown-content"  >
                            <NavLink to='/gk-geography' onClick={handleClick} >Geography</NavLink>
                            <NavLink to='/gk-organization' onClick={handleClick} >UN, SAARC & BIMSTEC</NavLink>
                        </div>
                    </div>

                    <NavLink to='/structural-engineering' onClick={handleClick}>Structural Engineering</NavLink>
                    <NavLink to='/test' onClick={handleClick}>Online Test</NavLink>
                    <NavLink to='/contact' onClick={handleClick} className="contact-us">Contact Us</NavLink>

                </nav>

                <div className='icon'>
                    <Hamburger direction="right" duration={0.6} toggled={showMenu} toggle={setShowMenu}></Hamburger>
                </div>
            </div>

        </>)
}
