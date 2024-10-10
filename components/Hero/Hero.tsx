import React from 'react'

const Hero = ({description, headingLevel, strapline}) => {
    let StraplineElement:any = "p";
    if(headingLevel){
      StraplineElement = `h${headingLevel}`;
    }
    return (
    <div>
        <StraplineElement>
            {strapline}
        </StraplineElement>
        <hr/>
        <p>{description}</p>
        <p>
            <a href="#contact">
            Get in touch
            </a>
        </p>
    </div>
  )
}

export default Hero