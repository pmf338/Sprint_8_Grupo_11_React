import image from '../assets/images/logo-DH.png';
import {Route, Link, Routes} from 'react-router-dom';
import ContentUserWrapper from './ContentUserWrapper';
import ContentWrapper from './ContentWrapper';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Lista de usuarios

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link to="/ContentUserWrapper">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/ContentWrapper">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Inicio</span>
                    </Link>
                </li>
                </div>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Routes>
                <Route path= "/ContentUserWrapper" element={<ContentUserWrapper/>} />
                <Route path= "/ContentWrapper" element={<ContentWrapper/>} />
            </Routes>
            {/*<!-- End of Sidebar -->*/}
            
        </>
    )
}
export default SideBar;