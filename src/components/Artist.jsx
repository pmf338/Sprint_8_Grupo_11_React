function Artist(props){
    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist;