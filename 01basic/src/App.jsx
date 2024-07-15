import React from "react"
import Welcome from "./props/Welcome"
import Welcome2 from "./props/Welcome2"


function App() {
  

  return (
    <>
     {/* COMPONENTS 
    <FunctionalComponent/>
    <ClassComponent/>  */}

    {/* PROPS */}
    <Welcome name="Chhaya">
      <p>This is children props</p>
    </Welcome>

    <Welcome2 name="Jaa Babu"/>
    </>
  )
}

export default App
