"use client"

import Listings from '@/app/OurComponents/listings/Listings';
import React, { useEffect, useState } from 'react';

const Auction = () => {
    const page = 1
    const size = 30
    const markId = ""
    const color = ""
    const modelId = ""
    const fromMilege = ""
    const toMilege = ""
    const fromYear = ""
    const toYear = ""
    const [auction, setAuction] = useState([]);
    const listingCars = auction.data;
    const totalListing = auction.total;
    const listName = "auctions"
    const routeLink = "auctions"

    useEffect(() => {


        fetch(`https://api.japanwheels.com/api/vehicles?page=${page}&size=${size}&marka_id=${markId}&model_id=${modelId}&from_year=${fromYear}&to_year=${toYear}&color=${color}&from_mileage=${fromMilege}&to_mileage=${toMilege}&grade&lot&auction&auction_date&eng_v&pw&kuzov`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAuction(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [page, size, color, modelId, fromMilege, toMilege, fromYear, toYear]);


    return (
        <div>



            <Listings
                listName={listName}
                listingCars={listingCars}
                totalListing={totalListing}
                routeLink={routeLink}
            ></Listings>


        </div>
    );
};

export default Auction;