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
    console.log(auctionSearchData.MARKA_NAME);
    useEffect(() => {


        fetch(`https://api.japanwheels.com/api/vehicles-one-price?page=${auctionSearchData?.page || 1}&size=${auctionSearchData?.size || 30}& MARKA_NAME=${auctionSearchData?.brand || ""}& MODEL_NAME=${auctionSearchData?.model || ""}& from_year=${auctionSearchData?.yearMin || ""}& to_year=${auctionSearchData?.yearMax || ""}& color=${auctionSearchData?.color || ""}& from_mileage=${""}& to_mileage=${""}& grade & lot & auction & auction_date & eng_v & pw & kuzov`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} `);
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