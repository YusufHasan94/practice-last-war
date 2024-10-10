import React from 'react'

const Title = ({title}) => {
    console.log(title);
  return (
    <div style={{display: "flex", alignItems: "center", gap: "10px", marginTop: "5px", marginBottom: "5px"}}>
        <div style={{width: "10%", height: "2px", backgroundColor: "white"}}></div>
            <h1 style={{width: "fit-content", color: "white", fontSize: "24px", lineHeight: "30px", fontWeight: "600"}}>{title}</h1>
        <div style={{flexGrow: 1, height: "2px", backgroundColor: "white"}}></div>
    </div>
  )
}

export default Title