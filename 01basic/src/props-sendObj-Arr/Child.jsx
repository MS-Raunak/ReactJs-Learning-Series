import React from 'react'

function Child({person, fruits}) { //destrucre person obj
    //destructure the value from person object & fruits array
    const{name, age, favCartoon} = person;
    const[apple, banana, grapes] = fruits;

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Favourite Cartoon: {person.favCartoon}</p>
      <br /><br />
      <h2>Fruits-List</h2>
      <ol>
        <li>{apple}</li>
        <li>{banana}</li>
        <li>{grapes}</li>
      </ol>
    </div>
  )
}

export default Child
