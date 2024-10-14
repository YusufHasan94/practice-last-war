import { DropZone } from '@measured/puck'
import React from 'react'

const Grid = ({items, col, gap}) => {
  return (
    <ul style={{color: "white", fontSize: "24px", display:"grid", gridTemplateColumns: `repeat(${col}, 1fr)`, gap:`${gap}`}}>
        {items?.map((item, i) => (
            <DropZone zone={`${item.title}`} style={{display: "flex", justifyContent: "center"}} />
        ))}
    </ul>
  )
}

export default Grid