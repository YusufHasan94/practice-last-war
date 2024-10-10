import React from 'react'

const BusinessCard = ({cardtitle, description}) => {
  return (
    <div style={{minWidth: "300px", backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px", display: "flex", flexDirection: "column", gap: "15px"}}>
        <h1 style={{fontSize: "32px"}}>{cardtitle}</h1>
        <p style={{fontSize: "22px"}}>{description}</p>
        <button style={{border: "1px solid black", borderRadius: "5px", padding: "6px 10px"}}>Read More</button>
    </div>
  )
}

export default BusinessCard