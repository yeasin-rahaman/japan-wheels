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
    fetch(
      `https://api.japanwheels.com/api/vehicles?page=${auctionSearchData?.page
      }&size=${auctionSearchData?.size}&model=${auctionSearchData.model
      }&model_id=${auctionSearchData?.modelId}&from_year=${auctionSearchData?.fromYear}&to_year=${auctionSearchData?.toYear}&color=${auctionSearchData?.color
      }&from_mileage=${auctionSearchData?.minMileage}&to_mileage=${auctionSearchData?.maxMileage
      }&marka_id:${auctionSearchData.model
      }&grade&lot&auction&auction_date&eng_v&pw&kuzov`
    )

      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAuction(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [auctionSearchData]);

  return (
    <div>
      <Listings
        listName={listName}
        listingCars={auction?.data}
        totalListing={auction?.total}
        routeLink={routeLink}>
      </Listings>
    </div>
  );
};

export default Auction;
