import '../css/title.css';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Title() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        < >
            <h1 className="siteInfo">Civil Engineering Mcq</h1>
            <div className='mainNav'>
                <nav className={
                    showMenu ? 'topNav responsive' : 'topNav'
                }>
                    <NavLink to='/'>SOM</NavLink>
                    <NavLink to='/structure'>Structure</NavLink>
                    <NavLink to='/rcc'>RCC</NavLink>
                    <NavLink to='/surveying'>Surveying</NavLink>
                    <NavLink to='/buildingMaterials'>Building Materials</NavLink>
                    <NavLink to='/estimation'>Estimation</NavLink>
                    <NavLink to='/constructionManagement'>Construction management</NavLink>
                    <NavLink to='/test'>Online Test</NavLink>

                </nav>

                <div className='icon'>
                    <Hamburger direction="right" duration={0.6} toggled={showMenu} toggle={setShowMenu}></Hamburger>
                </div>
            </div>

        </>)
}
