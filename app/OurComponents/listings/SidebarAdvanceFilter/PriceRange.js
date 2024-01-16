import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const PriceRange = ({ listData, onChildValuePrice }) => {

    const [maxPrice, setMaxPrice] = useState(Number(listData.max_year));
    const [minPrice, setMinPrice] = useState(Number(listData.min_year));


    useEffect(() => {

        setMinPrice(Number(listData.min_year));
        setMaxPrice(Number(listData.max_year));

    }, [listData]);

    // Initialize price state with default values
    const [rangeValue, setRangeValue] = useState({ value: { min: minPrice, max: maxPrice } });


    // Handle price range changes
    const handleOnChange = (value) => {
        setRangeValue({ value });
    };
    const handleOnChangeComplete = (value) => {
        onChildValuePrice({ value });
        alert({ value })
    };

    // Destructure price state for better readability
    const { value: { min, max } } = rangeValue;



    return (
        <div>
            <div className='advance_search_style style_2 flex-wrap justify-content-between'>
                <h1>Range Price</h1>
                {/* Render InputRange only when minPrice and maxPrice are not 0 */}
                {minPrice !== 0 && maxPrice !== 0 && (
                    <React.Fragment>
                        {/* Price range slider */}
                        <InputRange
                            formatLabel={() => ''}
                            minValue={minPrice}
                            maxValue={maxPrice}
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

export default PriceRange;