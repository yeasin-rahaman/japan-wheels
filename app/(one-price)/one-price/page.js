"use client"

import Listings from '@/app/OurComponents/listings/Listings';
import React, { useEffect, useState } from 'react';

const OnePrice = () => {
    const [listingCars, setListingCars] = useState([])

    const page = 1
    const size = 30
    const markId = ""
    const color = ""
    const modelId = ""
    const fromMilege = ""
    const toMilege = ""
    const fromYear = ""
    const toYear = ""

    const listName = "One-Price"
    const routeLink = "one-price"

    useEffect(() => {

        debugger
        fetch(`https://api.japanwheels.com/api/vehicles-one-price?page=${page}&size=${size}&marka_id=${markId}&model_id=${modelId}&from_year=${fromYear}&to_year=${toYear}&color=${color}&from_mileage=${fromMilege}&to_mileage=${toMilege}&grade&lot&auction&auction_date&eng_v&pw&kuzov`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListingCars(data ? data?.data : []);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [page, size, color, modelId, fromMilege, toMilege, fromYear, toYear]);
    console.log("listingCars", listingCars);

    return (
        <div>
            <Listings
                listName={listName}
                listingCars={listingCars}
                routeLink={routeLink}
            ></Listings>
        </div>
    );
};

export default OnePrice;