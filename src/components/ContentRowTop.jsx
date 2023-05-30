import Image from '../assets/images/mandalorian.jpg';
import ArtistsInDb from './ArtistsInDb.jsx';
import ProductsInDb from './ProductsInDb.jsx';
import UsersInDb from './UsersInDb.jsx';
import CategoriesInDb from './CategoriesInDb.jsx';
import LastProductInDb from './LastProductInDb.jsx';
import CategoriesCards from './CategoriesCards';

function ContentRowTop(){
    return(
        <>
			{/*{/*{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*{/*<!-- Products in Data Base -->*/}
						<ProductsInDb/>

						{/*{/*<!-- ArtistsInDb -->*/}
						<ArtistsInDb />

						{/*{/*<!-- UsersInDb -->*/}
						<UsersInDb/>

						{/*{/*<!-- CategoriesInDb -->*/}
						<CategoriesInDb/>

					</div>
					{/*<!-- End movies in Data Base -->*/}
					
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProductInDb/>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriesCards/>
					</div>


				</div>
				{/*<!--End Content Row Top-->*/}
        </>
    )

}
export default ContentRowTop;