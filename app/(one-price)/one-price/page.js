"use client"

import Listings from '@/app/OurComponents/listings/Listings';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const OnePrice = () => {
    const dispatch = useDispatch();
    const auctionSearchData = useSelector((state) => state.japanwheels?.auctionSearchData);

    const [onePrice, setOnePrice] = useState([]);
    const listName = "One-Price"
    const routeLink = "one-price"

    useEffect(() => {


        fetch(`https://api.japanwheels.com/api/vehicles-one-price?page=${auctionSearchData?.page}&size=${auctionSearchData?.size}&model="TOYOTA"&model_id=${auctionSearchData?.modelId || ''}&from_year=${auctionSearchData?.fromYear || ''}&to_year=${auctionSearchData?.toYear || ''}&color=${auctionSearchData?.color || ''}&from_mileage=${auctionSearchData?.minMileage || ""}&to_mileage=${auctionSearchData?.maxMileage || ""}&grade&lot&auction&auction_date&eng_v&pw&kuzov`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setOnePrice(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [auctionSearchData]);

    return (
        <div>
            <Listings
                listName={listName}
                listingCars={onePrice?.data}
                totalListing={onePrice?.total}
                routeLink={routeLink}
            ></Listings>
        </div>
    );
};

export default OnePrice;