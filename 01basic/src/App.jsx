import React from "react"
//To using any componet first import that component
import StateDemo from "./state/StateDemo"
import Counter from "./state/Counter"
import Welcome from "./props/Welcome"
import Welcome2 from "./props/Welcome2"
import PropsDestructuring from "./props/PropsDestructuring"
import EventHandlerDemo from "./event-handler/EventHandlerDemo"
import ParentComponent from "./props-sendMethod-Ref/ParentComponent"
import Parent from "./props-sendObj-Arr/Parent"
import CondRender from "./conditionalRendering/CondRender"
import CondRender2 from "./conditionalRendering/CondRender2"
import CondRender3 from "./conditionalRendering/CondRender3"
import CondRender4 from "./conditionalRendering/CondRender4"
import ListRenderDemo from "./list-rendering/ListRenderDemo"
import PersonDisplayList from "./list-rendering/Person"
import PersonObjList from "./list-rendering/PersonList"
import StyleComponent from "./css-styling/StyleComponent"

function App() {

  return (
    <>
      {/* COMPONENTS>>>>>> 
    <FunctionalComponent/>
    <ClassComponent/>  */}

      {/* PROPS>>>>>>>>>>>>> 
    <Welcome name="Chhaya">
      <p>This is children props</p>
    </Welcome>
    <Welcome2 name="Jaa Babu"/> 
    <PropsDestructuring msg="India is great"/>*/}

      {/* EVENT HANDLER>>>>>>>>>>>>>  
     <EventHandlerDemo/> */}

      {/* STATE>>>>>>>>>>>>>  
     <StateDemo />
     <Counter/> */}

      {/* METHOD AS PROPS >>>>>>>>>>>>>   
    <ParentComponent/>*/}

      {/* OBJECT AS PROPS >>>>>>>>>>>>>   
    <Parent/>*/}

      {/* Conditional Rendering >>>>>>>>>>>>>  
      <CondRender />
      <CondRender2 />
      <CondRender3 />
      <CondRender4 />*/}

      {/* List Rendering >>>>>>>>>>>>>  
      <ListRenderDemo />
      <PersonObjList /> */}

      {/* CSS IN REACT >>>>>>>>>>>>>  */}
      <StyleComponent />
    </>
  )
}

export default App
