import React from "react"

const FaveFilm = ({film, key}) => {

    return (
        <img src={film.image} className = "fave-film-image"/>
    )
}

export default FaveFilm