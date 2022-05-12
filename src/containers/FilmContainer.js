import React, { useState, useEffect } from "react"
import FilmList from "../components/FilmList"
import FilmDetail from "../components/FilmDetail";
import FavouriteFilms from "../components/FavouriteFilms";

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [favouriteFilms, setFavouriteFilms] = useState([]);

    useEffect(() => {
        getFilms();
    }, [])

    const onFilmClick = (film) => {
        setSelectedFilm(film)
    }

    const onFavouriteClick = (faveFilm) => {

        const copyList = [... favouriteFilms]

        const isOnList = copyList.some((film) => {
            return film.id === faveFilm.id
        }) 

        if (!isOnList) { 
        copyList.push(faveFilm)
        }

        setFavouriteFilms(copyList)
        
    }

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    return (
        <>
            <div className = "list-and-detail-container">
            
            <FilmList films = {films} onFilmClick = {onFilmClick} onFavouriteClick = {onFavouriteClick} />

            <div className="right-container">
            
            {selectedFilm ? <FilmDetail selectedFilm = {selectedFilm} />: null }

            <h2>Favourite Films</h2>
            <FavouriteFilms favouriteFilms = {favouriteFilms} />
            
            </div>

            </div>

        
        </>
    )
}

export default FilmContainer