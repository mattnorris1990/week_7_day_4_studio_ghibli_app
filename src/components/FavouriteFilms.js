import React from "react"
import FaveFilm from "./FaveFilm"


const FavouriteFilms = ({favouriteFilms}) => {

    const faveFilmItems = favouriteFilms.map((film, index) => {
        return <FaveFilm film = {film} key = {index}/>
    })

    return (
        <>
        <div className="fave-film-tiles">
        {faveFilmItems}
        </div>
        </>
    )
}

export default FavouriteFilms