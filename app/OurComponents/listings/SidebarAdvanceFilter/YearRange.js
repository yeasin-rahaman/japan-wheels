import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const YearRange = ({ listData, onChildValueYear }) => {

    const [maxYear, setMaxYear] = useState(Number(listData.max_year));
    const [minYear, setMinYear] = useState(Number(listData.min_year));


    useEffect(() => {

        setMinYear(Number(listData.min_year));
        setMaxYear(Number(listData.max_year));

    }, [listData]);

    // Initialize price state with default values
    const [rangeValue, setRangeValue] = useState({ value: { min: minYear, max: maxYear } });


    // Handle price range changes
    const handleOnChange = (value) => {
        setRangeValue({ value });
    };
    const handleOnChangeComplete = (value) => {
        onChildValueYear({ value });
    };

    // Destructure price state for better readability
    const { value: { min, max } } = rangeValue;



    return (
        <div>
            <div className='advance_search_style style_2 flex-wrap justify-content-between'>
                {/* Render InputRange only when minYear and maxYear are not 0 */}
                {minYear !== 0 && maxYear !== 0 && (
                    <React.Fragment>
                        {/* Price range slider */}
                        <InputRange
                            formatLabel={() => ''}
                            minValue={minYear}
                            maxValue={maxYear}
                            value={rangeValue.value}
                            onChangeComplete={(value) => handleOnChangeComplete(value)}
                            onChange={(value) => handleOnChange(value)}
                            id='slider'
                        />
                        {/* Display selected price range values */}
                        <span id='slider-range-value1'>${min}</span>
                        <span id='slider-range-value2'>${max}</span>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default YearRange;