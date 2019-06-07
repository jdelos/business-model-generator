import React, { useState, useEffect } from "react"
import Draggable from "react-draggable"

import styled from "styled-components"

const Container = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: lime;
  text-align: center;
  cursor: move;
  font-size: 1vw;
  display: flex;
  margin: 10px;
  position: fixed;
  top: ${ props => props.position.y }px;
  left: ${ props => props.position.x }px;
  
  div {
    margin: auto;
    max-width: 100%;
    padding: 0.5vw;
  }

  textarea {
    padding: 0.5vw;
    max-width: 100%;
    background: transparent;
    font-size: 1vw;
    height: 100%;
    resize: none;
    border: none;
  }
`

const StickyNote = ({ initialText, position }) => {
  const [text, setText] = useState(initialText)
  const [activeInput, setActiveInput] = useState(false)

  const handleDoubleClick = () => {
    console.log("Doubble click!")

    setActiveInput(true)
  }

  const onChangeInput = e => setText(e.target.value)
  const handleKeyDown = e => {
    if (e.key == "Enter") {
      setActiveInput(false)
    }
  }

  let refInput
  useEffect(() => {
    refInput.focus()
  })

  return (
    <Draggable>
      <Container onDoubleClick={handleDoubleClick}
        position={position ? position : { x: 10, y: 10 }}>
        
        <div style={{ display: `${activeInput ? "none" : "block"}` }}>
          <p>{text}</p>
        </div>
        <textarea
            style={{ display: `${activeInput ? "block" : "none"}` }}
            ref={input => {
              refInput = input
            }}
            autoFocus
            value={text}
            onChange={onChangeInput}
            onKeyDown={handleKeyDown}
          />
        
      </Container>
    </Draggable>
  )
}

export default StickyNote
