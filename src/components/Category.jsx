function Category(props){
    return(
        <>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-8 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													{props.description}
												</div>
											</div>
										</div>
									</div>
								</div>
							
        </>
    )
}

export default Category;