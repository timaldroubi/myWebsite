import React, { useState } from 'react'



const ImageSlider = ({slides}) => {
    const [currentIndex, setcurrentIndex] = useState(0)

    const slideStyles = {
        width: "100%",
        height : "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundImage: slides[currentIndex]
    }
    const sliderStyles = {
        height : "100%",
        position: "relative",
    }

    return(
        <div style={sliderStyles}>
            <div style={slideStyles}>
                
            </div>
        </div>
    )
}

export default ImageSlider;