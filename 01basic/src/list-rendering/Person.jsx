import React from 'react'

//Child Component
function PersonDisplayList({listOfPerson}) {
   
  return (
    <>
      {listOfPerson.map(person=> <p key={person.id}>My name is {person.name}, I am {person.age} year old and I am a {person.desig}</p>)}
    </>
  )
}

export default PersonDisplayList;

/**
 * A key is a special list attribute which we use while creating the list.
 * Keys help React identify which items changed or added or removed.
 * It helps in efficient update of the UI
 * 
 * When to used index as key?
 * When the list does not have any unique id.
 * 
 * Note: using index as key is not recommended.
 */