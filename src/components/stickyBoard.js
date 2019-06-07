import React, { useState } from 'react'
import styled from 'styled-components'

import StickyNote from './stickyNote'

const BoardWrapper = styled.div`
  postion:fixed;
  top:0;
  bottom:0;
  width: 100%;
  height:100%;
  background-color: white;
  opacity: 0.5;
`



const NoteList = ({ items, position }) => (
  <div>
    {
      items.map((item, i) => <StickyNote key={i} initialText={item} position={position}/>)
    }
  </div>
);


const StickyBoard = () => {
  
  const [notes, setNotes] = useState([])
  const [notePosition, setNotePosition] = useState({x:10,y:10})

  const addNote = () => {
    
    setNotes( [...notes,''])
    console.log("Clicked handdled",notes)
  } 

  const handleMouseMove = (e) => setNotePosition({ x: e.screenX, y: e.screenY })
  return (
    <BoardWrapper onDoubleClick={addNote} onMouseMove={handleMouseMove} >
     <NoteList items={notes} position={notePosition} ></NoteList>
    </BoardWrapper >

    
  )
}

export default StickyBoard
 