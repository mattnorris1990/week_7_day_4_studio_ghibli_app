import React, { useState, useEffect } from "react"


const Film = ({film, onFilmClick, onFavouriteClick, onPeopleClick}) => {

    const handleFilmClick = () => {
        onFilmClick(film)
    }

    const handleFavouriteClick = () => {
        onFavouriteClick(film)
    }

    const handlePeopleClick = () => {
        onPeopleClick(film)
    }

    return (
        <>
        <li onClick = {handleFilmClick}>
            {film.title} ({film.original_title}): {film.release_date} 
        </li>
        <button value={film} onClick={handleFavouriteClick}>+favourite</button>

        <button value={film} onClick={handlePeopleClick}>
            View Characters
        </button>

        <hr/>
        </>
    )
}

export default Film