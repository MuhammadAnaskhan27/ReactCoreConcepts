import { CORE_CONCEPTS } from "../../Data"
import Core from "../Core/Core"
import "../Core/Core.css"

const CoreConcept = () => {
  return (
    <>
     <section id='core-concepts' >
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map(function Mapping(core){
  return (
    <>
    <Core 
    key={core.id} 
    title={core.title} 
    description={core.description} 
    image={core.image} />
    </>
  )
  })}
    </ul>
    </section>
    </>
  )
}

export default CoreConcept