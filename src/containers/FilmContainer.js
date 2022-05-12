import React, { useState, useEffect } from "react"
import FilmList from "../components/FilmList"
import FilmDetail from "../components/FilmDetail";
import FavouriteFilms from "../components/FavouriteFilms";
import PeopleList from "../components/PeopleList";

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [favouriteFilms, setFavouriteFilms] = useState([]);
    const [people, setPeople] = useState([])

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

    const onPeopleClick = (film) => {

        const allPeople = film.people


        const peopleList = allPeople.map((person) =>{
            return fetch(person).then(res => res.json())

        })  

    Promise.all(peopleList)
        // .then(people => console.log(people))
        .then(res => setPeople(res))
        .catch(err => console.error);

        


    }

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(err => console.error);
    }


    return (
        <>
            <div className = "list-and-detail-container">
            
            <FilmList films = {films} onFilmClick = {onFilmClick} onFavouriteClick = {onFavouriteClick} onPeopleClick = {onPeopleClick}/>

            <div className="right-container">
            
            {selectedFilm ? <FilmDetail selectedFilm = {selectedFilm} />: null }

            <h2>Favourite Films</h2>
            <FavouriteFilms favouriteFilms = {favouriteFilms} />
            
            </div>

            </div>

            <PeopleList people = {people}/>

        
        </>
    )
}

export default FilmContainer