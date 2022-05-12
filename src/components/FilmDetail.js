import React, { useState, useEffect } from "react"
import PeopleList from "./PeopleList"


const FilmDetail = ({selectedFilm}) => {

    return (
        <>
        <div className = "film-detail-container">
            <img src={selectedFilm.movie_banner} className="detail-image"/>
            <h2>{selectedFilm.title}</h2>
            <p>Director: {selectedFilm.director}</p>
            <article>
                {selectedFilm.description}
            </article>
            <p>{selectedFilm.running_time}m | {selectedFilm.release_date} | Producer: {selectedFilm.producer}</p>
        </div>
        </>
    )
}

export default FilmDetail