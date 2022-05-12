import React from "react"

const PeopleList = ({people}) => {

    const peopleItems = people.map((person, index) => {
        return (
            <h4>{person.name}</h4>
        )
    })

    return (
        <>
        <h2>Characters</h2>
        <p>{peopleItems}</p>
        </>
    )

}


export default PeopleList
