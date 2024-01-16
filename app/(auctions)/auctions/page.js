'use client';
import Listings from '@/app/OurComponents/listings/Listings';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Auction = () => {
  const dispatch = useDispatch();
  const auctionSearchData = useSelector(
    (state) => state.japanwheels?.auctionSearchData
  );

  console.log('auctionSearchData:', auctionSearchData);
  const [auction, setAuction] = useState([]);

  const listingCars = auction.data;
  const totalListing = auction.total;
  console.log(totalListing);
  const listName = 'auctions';
  const routeLink = 'auctions';


  useEffect(() => {
    console.log('auctionSearchData:', auctionSearchData);
    fetch(
      // `https://api.japanwheels.com/api/vehicles?page=${auctionSearchData?.page}&size=${auctionSearchData?.size}&MARKA_NAME=${auctionSearchData.MARKA_NAME}&from_year=${auctionSearchData?.fromYear}&to_year=${auctionSearchData?.toYear}&color=${auctionSearchData?.color}&from_mileage=${auctionSearchData?.minMileage}&to_mileage=${auctionSearchData?.maxMileage}&grade&lot&auction&auction_date&eng_v&pw&kuzov`)
      `https://api.japanwheels.com/api/vehicles?page=${auctionSearchData?.page || 1}&size=${auctionSearchData?.size || 30}&MARKA_NAME=${auctionSearchData?.brand || ""}&MODEL_NAME=${auctionSearchData?.model || ""}&from_year=${auctionSearchData?.yearMin || ""}&to_year=${auctionSearchData?.yearMax || ""}&color=${auctionSearchData?.color || ""}&from_mileage=${""}&to_mileage=${""}&grade&lot&auction&auction_date&eng_v&pw&kuzov`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAuction(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [auctionSearchData]);





  return (
    <div>
      <Listings
        listName={listName}
        listingCars={auction.data}
        totalListing={auction.total}
        routeLink={routeLink}>
      </Listings>
    </div>
  );
};

export default Auction;
