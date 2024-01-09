import React from 'react'
import Tabs from "../Core/Tabs"
import { EXAMPLES } from "../../Data"
import { useState } from 'react';

const Example = () => {

  const [selectedTopic,setSelectedTopic] = useState()
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>
  if(selectedTopic){
    tabContent = (
    <div className='tab' > 
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </div>)}

  return (
    <>
    <section id='examples' >
    <h2>Examples</h2>
    <menu>
      <Tabs isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')} >Component</Tabs>
      <Tabs isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</Tabs>
      <Tabs isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</Tabs>
      <Tabs  isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</Tabs>
    </menu>
    {tabContent}
    </section>
    </>
  )
}

export default Example