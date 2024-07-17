import React from 'react'

//Child Component
function PersonDisplayList({listOfPerson}) {
   
  return (
    <>
      {listOfPerson.map((person, idx)=> <p key={idx}>My name is {person.name}, I am {person.age} year old and I am a {person.desig}</p>)}
    </>
  )
}

export default PersonDisplayList;
