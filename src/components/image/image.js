import React from 'react'
import './image.css'
import image from './000.jpg'

const Logo = () => {
    return (
        <div className="bg-blue">
            <div > <img alt = "logo" src = {image} /></div>
        </div>
    );
}

export default Logo;