import {Route, Link, Routes} from 'react-router-dom';
import ContentUserWrapper from './ContentUserWrapper';
import ContentWrapper from './ContentWrapper';
import ContentCategoriesWrapper from './ContentCategoriesWrapper';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src="" alt="Rocket Music"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Rocket Music</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Indice

                {/*<!-- Nav Item - Pages -->*/}
                
                <li className="nav-item">
                    <Link to="/ContentUserWrapper">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Lista de usuarios</span>
                    </Link>
                </li>

                </div>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Routes>
            <Route path= "/" element={<ContentWrapper/>} />
            <Route path= "/ContentUserWrapper" element={<ContentUserWrapper/>} />
            <Route path= "/ContentCategoriesWrapper/:id" element={<ContentCategoriesWrapper/>} />
            </Routes>
            {/*<!-- End of Sidebar -->*/}
            
        </>
    )
}
export default SideBar;