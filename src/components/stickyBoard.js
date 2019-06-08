import React, { useState } from 'react'
import styled from 'styled-components'

import StickyNote from './stickyNote'

const BoardWrapper = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  width: 100%;
  height:100%;
  background-color: transparent;
  z-index: 5;

`



const NoteList = ({ items, position, handleMouseEnter, handleMouseLeave }) => (
  <div>
    {
      items.map((item, i) => <StickyNote
        key={i}
        initialText={item}
        position={position}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />)
    }
  </div>
);


const StickyBoard = () => {
  
  const [notes, setNotes] = useState([])
  const [notePosition, setNotePosition] = useState({ x: 10, y: 10 })
  
  const [inNote,setInNote] = useState(false)

  const addNote = () => {
    if (!inNote) {

      setNotes( [...notes,''])
      console.log("Clicked handdled",notes)
    }
  } 

  const handleMouseEnter = () => setInNote(true)
  const handleMouseLeave = () => setInNote(false)


  const handleMouseMove = (e) => {
    console.log(`x: ${e.screenX} y: ${e.screenY}`)
    setNotePosition({ x: e.screenX, y: e.screenY })
  }
  
  return (
    <BoardWrapper onDoubleClick={addNote} onMouseMove={handleMouseMove} >
      <NoteList items={notes}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave} ></NoteList>
    </BoardWrapper >

    
  )
}

export default StickyBoard
 