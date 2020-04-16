import React from 'react';
import Slider from '../Slider/Slider'
import BelowSlider from '../BelowSlider/BelowSlider'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Principle from '../Principle/Principles'
import Information from '../Information/Information'
import ImagePanel from '../ImagePanel/ImagePanel'
const Entry = () => {
    return (
        <div>
            <Slider />
            <BelowSlider />
            <WhoWeAre />
            <Principle />
            <Information />
            <ImagePanel />
        </div>
    );
}

export default Entry;