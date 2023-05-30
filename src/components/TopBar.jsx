import UserLogged from './UserLogged';

function TopBar(){
    return(
        <>
			{/*<!-- Topbar -->*/}
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				{/*<!-- Sidebar Toggle (Topbar) -->*/}
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars"></i>
				</button>

				{/*<!-- Topbar Navbar -->*/}
				<ul className="navbar-nav ml-auto">

					{/*<!-- Nav Item - Alerts -->*/}
					
					{/*<!-- Nav Item - Messages -->*/}
					

					<div className="topbar-divider d-none d-sm-block"></div>

					{/*<!-- Nav Item - User Information -->*/}
					<UserLogged/>
				</ul>
			</nav>
			{/*<!-- End of Topbar -->*/}
        </>
    )
}
export default TopBar;