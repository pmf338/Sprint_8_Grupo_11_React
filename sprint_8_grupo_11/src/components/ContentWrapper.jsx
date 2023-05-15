import React from "react";
import ContentRowTop from "./ContentRowTop.jsx";
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";
import SideBars from "./SideBars.jsx"


function ContentWrapper(){

    return(

<div id="content-wrapper" class="d-flex flex-column">

		
<div id="content">
<TopBar/>
<ContentRowTop/>
<SideBars/>
<Footer/>
</div>
</div>


    )
}

export default ContentWrapper;