import React from 'react'
//import PropTypes from 'prop-types'
import {FaBeer} from 'react-icons/fa'

const ContentRowMovies = props => {
  
    let data = [
        {
        titulo: 'movies data base',
        borderColor: 'primary',
        cifra:'21',
        icono:'fa-film'},
    {
        titulo: 'total awards',
        borderColor: 'success',
        cifra:'49',
        icono:'fa-award'},
    {
        titulo: 'actors quantity',
        borderColor: 'warning',
        cifra:'79',
        icono:'fa-user'
    }]
  
    return (
        <>

        {
        data.map((card, i) => {
            return(
            <div className="col-md-4 mb-4">
        <div className={`card border-left-${card.borderColor} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{card.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{card.cifra}</div>
                    </div>
                    <div className="col-auto">
                        {/* <i className="fas fa-film fa-2x text-gray-300"></i> */}
                        <FaBeer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
        })
        }
    </>
  )
}

//ContentRowMovies.propTypes = {}

export default ContentRowMovies