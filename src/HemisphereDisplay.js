import React from "react";
import './Hemisphere.css';
import northernPic from './images/NorthernHemisphere.jpg'
import southernPic from './images/SouthernHemisphere.jpg'

const hemisphereConfig = {
    Northern: {
        text: "You are in the Northen Hemisphere",
        picture: northernPic
    },
    Southern: {
        text: "You are in the Southern Hemisphere",
        picture: southernPic
    }
};

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0? "Northern" : "Southern";
    const { text, picture } = hemisphereConfig[hemisphere];

    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
            <div className="image">
                <img src={picture} alt="north-south-hemisphere" />
            </div>
            <div className="ui teal bottom attached label">
                <h1 style={{textAlign: 'center'}}>{ text }</h1>
            </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;