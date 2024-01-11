import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { saveAuctionSearchData } from '@/app/Redux/dataSlice';
const CarItems = ({
  listingCars,
  totalPage,
  Size,
  routeLink,
  totalListing,
}) => {
  const dispatch = useDispatch();
  const auctionSearchData = useSelector(
    (state) => state.japanwheels?.auctionSearchData
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(totalListing);

  useEffect(() => {
    dispatch(
      saveAuctionSearchData({ ...auctionSearchData, page: currentPage })
    );
  }, [currentPage]);

  console.log(totalPages);
  // Update totalPages when the blogs data changes
  useEffect(() => {
    setTotalPages(totalListing);
  }, [totalListing]);

  // Pagination Start

  const pages = [];

  // Handle page click
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of pages to display (current page, previous 2, and next 2)
  const pageRange = Array.from({ length: 3 }, (_, index) => {
    let pagePositionMath = 0;
    if (currentPage == 1) {
      pagePositionMath = 0;
    } else {
      pagePositionMath = 1;
    }
    const pageIndex = currentPage - pagePositionMath + index;

    return pageIndex >= 1 && pageIndex <= totalPages ? pageIndex : null;
  });

  // Handle First, Previous, Next, and Last buttons
  const handleFirst = () => setCurrentPage(1);
  const handlePrevious = () => setCurrentPage(currentPage - 1);
  const handleNext = () => setCurrentPage(currentPage + 1);
  const handleLast = () => setCurrentPage(totalPages);

  // Create the page buttons for pagination
  for (const page of pageRange) {
    if (page === null) {
      pages.push(
        <li key={`ellipsis-${pages.length}`} className='page-item disabled'>
          <span className='page-link'>...</span>
        </li>
      );
    } else {
      pages.push(
        <li
          // role="button"
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(page)}>
          <span className='page-link'>{page}</span>
        </li>
      );
    }
  }
  return (
    <>
      {
        // listingCars.slice(0, 9).map((listing) => (
        listingCars?.map((listing) => (
          <div className='col-sm-6 col-xl-4' key={listing.ID}>
            <Link href={`${routeLink}/${listing.ID}`}>
              <div className='car-listing'>
                <div className='thumb'>
                  {listing.STATUS && (
                    <div className='tag'>{listing.STATUS}</div>
                  )}

                  <Image
                    width={284}
                    height={183}
                    style={{
                      width: '100%',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                    priority
                    src={listing?.IMAGES?.split('#')[0].replace(
                      /&h=50/,
                      '&w=320'
                    )} // Use only the first image URL
                    alt={''}
                  />
                  <div className='thmb_cntnt2'>
                    <ul className='mb0'>
                      <li className='list-inline-item'>
                        <a className='text-white' href='#'>
                          <span className='flaticon-photo-camera mr3' />{' '}
                          {listing.YEAR}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='thmb_cntnt2'>
                    <ul className='mb0'></ul>
                  </div>
                  <div className='thmb_cntnt3'>
                    <ul className='mb0'>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <span className='flaticon-shuffle-arrows' />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <span className='flaticon-heart' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='details'>
                  <div className='wrapper'>
                    <h5 className='price'>{listing.MODEL_NAME}</h5>

                    <h6 className='title'>{listing.YEAR}</h6>
                    <h6 className='title'>{listing.MARKA_NAME}</h6>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                      className='listign_review flex'>
                      <h6
                        style={{ marginRight: '5px' }}
                        className='list-inline-item'>
                        ${listing.AVG_PRICE}
                      </h6>
                      <ul
                        style={{
                          listStyle: 'none',
                          display: 'flex',
                          margin: '0',
                          padding: '0',
                        }}
                        className='list-inline-item'>
                        {[...Array(5)].map((_, index) => (
                          <li
                            key={index}
                            style={{ marginRight: '5px' }}
                            className='list-inline-item'>
                            <a href='#'>
                              <i className='fa fa-star' />
                            </a>
                          </li>
                        ))}
                        <li className='list-inline-item'></li>
                      </ul>
                    </div>
                  </div>
                  {/* End wrapper */}

                  <div className='listing_footer'>
                    <ul className='mb0'>
                      <li className='list-inline-item'>
                        <span className='flaticon-road-perspective me-2' />
                        {listing.MILEAGE}
                      </li>
                      <li className='list-inline-item'>
                        <span className='flaticon-gas-station me-2' />
                        {listing.MODEL_ID}
                      </li>
                      <li className='list-inline-item'>
                        <span className='flaticon-gear me-2' />
                        {listing.ENG_V}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      }

      {/* Pagination */}
      <div className='row'>
        <div className='col-lg-12'>
          <div className='mbp_pagination mt20'>
            <ul className='page_navigation'>
              {/* <li role="button" className="page-item" onClick={handleFirst}>
                <span className="page-link">First</span>
              </li> */}
              <li className='page-item' onClick={handlePrevious}>
                <span className='fa fa-arrow-left' />
              </li>
              {pages}
              <li role='button' className='page-item' onClick={handleNext}>
                <span className='fa fa-arrow-right' />
              </li>
              {/* <li role="button" className="page-item" onClick={handleLast}>
                <span className="page-link">Last</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItems;
