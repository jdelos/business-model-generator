import React, { useState, useEffect } from "react"
import Draggable from "react-draggable"

import styled from "styled-components"


const colorPalette = '#FF9AA2,#FFB7B2,#FFDAC1,#E2F0CB,#B5EAD7,#C7CEEA'.split(',')

const Container = styled.div`  
  text-align: center;
  cursor: default;
   
  position: absolute;
  top: ${props => props.position.y}px;
  left: ${props => props.position.x}px;

  display:grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2,fit-content(20vw));
  grid-column-gap: 10px;
  justify-items: center;
  align-items: center;

  p,
  h1,
  textarea {
    margin: 0;
    padding: 5px;
    font-size: 1.2vw;
  }
`
const InpuText = styled.textarea`
  font-family: "Expo";
  padding: 0.5vw;
  max-width: 100%;
  background: transparent;
  font-size: 1vw;
  height: 100%;
  resize: none;
  border: none;
  display: ${ props => props.visible ? `block` : `none` };
`

const CardText = styled.div`
  margin: auto;
  max-width: 100%;
  padding: 0.5vw;
  display: ${ props => props.visible ? `block` : `none` };
  
`

const CardWrapper = styled.div`
  background-color: ${props => props.color};
  height: 8vw;
  width: 10vw;
  cursor: move;
  display:flex;
  align-items: center;
  justify-content: center;  
`
const MenuWrapper = styled.div`
  transition: opacity 500ms;
  opacity: ${ props => props.visible ? '1' : '0'};
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 3px;
      padding: 0;
    }
  }  
`
const ColorRadioButton = styled.input`
  height: 15px;
  width: 15px;
  background: ${ props => props.color }
`

const StickyNote = ({
  initialText,
  position,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [text, setText] = useState(initialText)
  const [activeInput, setActiveInput] = useState(false)
  const [color,setColor] = useState(colorPalette[0])

  const handleDoubleClick = () => {
    console.log("Doubble click!")

    setActiveInput(true)
  }

  const onChangeInput = e =>
    setText(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))
  
  const handleKeyDown = e => {
    if (e.key == "Enter") {
      setActiveInput(false)
    }
  }

  const changeColor = (e,key) => {
    console.log(key)
  }
    
  let refInput
  useEffect(() => {
    refInput.focus()
  })

  return (
    <Draggable>
      <Container
        onDoubleClick={handleDoubleClick}
        position={position ? position : { x: 10, y: 10 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        
        <CardWrapper color={color}>
          <CardText visible={!activeInput} >
            <h1>{text}</h1>
          </CardText>
          <InpuText
            visible={activeInput}
            ref={input => {
              refInput = input
            }}

            autoFocus
            value={text}
            onChange={onChangeInput}
            onKeyDown={handleKeyDown}
          />
        </CardWrapper>
        <MenuWrapper visible={activeInput} >
          <ul>
             {colorPalette.map((data, index) =>
              <li key={index} onClick={() => setColor(data)}
               style={{ height: `15px`, width: `15px`, background: `${data}` }} />)}  
          </ul>
        </MenuWrapper>
      </Container>
    </Draggable>
  )
}

export default StickyNote
