import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ProductsList from './ProductsList';

function ContentWrapper(){
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ProductsList/>
                    <Footer />
                </div>
            </div>    
        </>
    )
}

export default ContentWrapper;