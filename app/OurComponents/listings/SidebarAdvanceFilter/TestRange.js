import React, { useState, useEffect } from 'react';
import './test.css';

const TestRange = ({ listData }) => {
    console.log(Number(listData.max_year));
    const [sliderValues, setSliderValues] = useState({
        slide1: Number(listData.max_year),
        slide2: Number(listData.min_year)
    });

    const getVals = () => {
        // Get slider values
        const parent = document.getElementById('sliderParent'); // replace 'sliderParent' with the actual ID of the parent element
        const slides = parent.getElementsByTagName('input');
        const slide1 = parseFloat(slides[0].value);
        const slide2 = parseFloat(slides[1].value);

        // Neither slider will clip the other, so make sure we determine which is larger
        if (slide1 > slide2) {
            setSliderValues({ slide1: slide2, slide2: slide1 });
        } else {
            setSliderValues({ slide1, slide2 });
        }
    };

    useEffect(() => {
        // Manually trigger event first time to display values
        getVals();
    }, []);

    return (
        <div>
            <p>Price Range</p>
            <div className="range-slider" id="sliderParent">
                <span className="rangeValues">
                    ${sliderValues.slide1} - ${sliderValues.slide2}
                </span>
                <input
                    value={sliderValues.slide1}
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                    onChange={getVals}
                />
                <input
                    value={sliderValues.slide2}
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                    onChange={getVals}
                />
            </div>
        </div>
    );
};

export default TestRange;