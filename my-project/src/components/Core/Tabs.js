import React from 'react'

const Tabs = ({children,onSelect,isSelected}) => {
  return (
    <>
    <li><button className={isSelected?'active':null} onClick={onSelect} >{children}</button></li>
    </>
  )
}

export default Tabs