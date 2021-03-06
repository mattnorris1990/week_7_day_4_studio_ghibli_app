import React, { useState, useEffect } from "react"
import Film from "./Film"


const FilmList = ({films, onFilmClick, onFavouriteClick, onPeopleClick}) => {

    const filmItems = films.map((film, index) => {
        return <Film film = {film} key = {index} onFilmClick = {onFilmClick} onFavouriteClick = {onFavouriteClick} onPeopleClick = {onPeopleClick} />
    })

    return (
        <>
        <ul className = "film-list-item">
            {filmItems}
        </ul>

        </>
    )
}

export default FilmList