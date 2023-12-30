"use client"

import Listings from '@/app/OurComponents/listings/Listings';
import React, { useEffect, useState } from 'react';

const OnePrice = () => {
    const [listingCars, setListingCars] = useState([]);
    const listName = "One Price"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.japanwheels.com/api/vehicles');
                const data = await response.json();
                setListingCars(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures this effect runs only once on component mount
    console.log(listingCars.length);
    return (
        <div>
            <Listings
                listName={listName}
                listingCars={listingCars}
            ></Listings>
        </div>
    );
};

export default OnePrice;