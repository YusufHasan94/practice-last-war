import React from 'react'

const GameCard = ({imageUrl, cardTitle, cardDescription, badge}) => {
  return (
    <div style={{minWidth: "300px", height: "250px", position:"relative", backgroundColor: "#AEAEAF", borderRadius: "10px", overflow:"hidden"}}>
        <img src={`${imageUrl}`} alt="" style={{}} />
        <div style={{position: "absolute", width:"100%", bottom: "0", color: "white", padding: "0 20px 20px 20px", background: "linear-gradient(0deg, rgba(0,0,0,1) 7%, rgba(0,0,0,0.5886729691876751) 43%, rgba(220,221,214,0.09287464985994398) 100%)"}}>
            <h1 style={{fontSize: "22px", fontWeight: "600"}}>{cardTitle}</h1>
            <p style={{fontSize: "18px"}}>{cardDescription}</p>
        </div>
        <div style={{position:"absolute", top:"30px", right: "30px", rotate: "20deg", fontSize: "15px", color:"White"  }}>{badge}</div>
    </div>
  )
}

export default GameCard