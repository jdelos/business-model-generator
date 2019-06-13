import React,{ useState } from 'react'
import StickyNote from '../components/stickyNote'

//import '../components/dragboard.css'

const ListItem = ({ value, position }) => (
  <StickyNote initialText={value} position={position}/>
);

const List = ({ items, position }) => (
  <div>
    {
      items.map((item, i) => <ListItem key={i} value={item} position={position}  />)
    }
  </div>
);



const Test = () => {
  
  const [cards, setCards] = useState(['Apple', 'Banana', 'Orange'])
  const [mousPosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const addCard = (e) => {
    console.log(e)

    
    setCards([...cards,''])
    
  }



 

  const handleMousePoistion = (e) => {
    console.log(e)
    console.log(`x: ${e.screenX} y: ${e.screenY}`)
    //setMousePosition({ x: e.screenX, y: e.screenY })
  }
  
  return (
    <div style={{height: `100vh`, width: `100vw`}} onDoubleClick={addCard} onMouseMove={handleMousePoistion} >
      <List items={cards} position={mousPosition}/>
      </div>
  )
}

export default Test