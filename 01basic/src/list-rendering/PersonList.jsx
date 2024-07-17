import React from 'react'
import PersonDisplayList from './Person'


//Parent Component
function PersonObjList() {
    let personList = [
        {
            id: 1,
            name: "Chhaya",
            age: 3,
            desig: "kid"
        },

        {
            id: 2,
            name: "Jaa Babu",
            age: 22,
            desig: "Student"
        },

        {
            id: 3,
            name: "Lala",
            age: 15,
            desig: "B Bhkt"
        }
    ]


    return (
        <>
            <PersonDisplayList listOfPerson={personList} />
        </>
    )
}

export default PersonObjList;

