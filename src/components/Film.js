import React, { useState, useEffect } from "react"


const Film = ({film, onFilmClick, onFavouriteClick}) => {

    const handleFilmClick = () => {
        onFilmClick(film)
    }

    const handleFavouriteClick = () => {
        onFavouriteClick(film)
    }

    return (
        <>
        <li onClick = {handleFilmClick}>
            {film.title} ({film.original_title}): {film.release_date} 
        </li>
        <button value={film} onClick={handleFavouriteClick}>+favourite</button>
        </>
    )
}

export default Film