import '../css/title.css';
import { NavLink } from 'react-router-dom';
export default function Title() {
    return (
        <div >
            <h1 className="siteInfo">Civil Engineering MCQ</h1>
            <nav >
                <NavLink to='/'>SOM</NavLink>
                <NavLink to='/structure'>Structure</NavLink>
                <NavLink to='/rcc'>RCC</NavLink>
                <NavLink to='/surveying'>Surveying</NavLink>
                <NavLink to='/buildingMaterials'>Building Materials</NavLink>
                <NavLink to='/estimation'>Estimation</NavLink>
                <NavLink to='/test'>Online Test</NavLink>
            </nav>

        </div>)
}
