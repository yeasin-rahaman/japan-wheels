import { saveCarDetailsPaginationData } from '@/app/Redux/dataSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Features = ({ tableData }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [carListings, setCarListings] = useState([]);
  console.log('tableData:', tableData);

  const [totalPages, setTotalPages] = useState(1);
  const [size, setSize] = useState(30);
  useEffect(() => {
    dispatch(saveCarDetailsPaginationData({ page: currentPage }));
  }, [currentPage, dispatch]);
  useEffect(() => {
    setCarListings(tableData?.data);
    setTotalPages(tableData?.total / 10);
  }, [tableData]);

  // Define pagination variables and functions
  const pages = [];
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

  const handleClick = (page) => {
    setCurrentPage(page);
  };
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
          role='button'
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
      <div className='col-lg-12'>
        <h4 className='title'>Statistics</h4>
      </div>
      {/* Table Show  */}
      <div className='col-lg-12'>
        <div className='table-responsive my_lisging_table'>
          <table className='table'>
            <thead className='table-light'>
              <tr className='thead_row'>
                <th className='thead_title pl20' scope='col'>
                  Image
                </th>
                <th className='thead_title pl20' scope='col'>
                  Name
                </th>{' '}
                <th className='thead_title pl20' scope='col'>
                  LOT Number
                </th>
                <th className='thead_title' scope='col'>
                  Auction Date
                </th>
                <th className='thead_title' scope='col'>
                  Engine CC
                </th>
                <th className='thead_title' scope='col'>
                  Chassis ID
                </th>
                <th className='thead_title' scope='col'>
                  Mileage
                </th>{' '}
                <th className='thead_title' scope='col'>
                  Condition
                </th>{' '}
                <th className='thead_title' scope='col'>
                  Price
                </th>{' '}
                <th className='thead_title' scope='col'>
                  Color
                </th>
              </tr>
            </thead>
            {/* End thead */}

            <tbody>
              {carListings?.map((car) => (
                <tr key={car.id}>
                  <th className='align-middle pl20' scope='row'>
                    <div className='car-listing bdr_none d-flex mb0'>
                      <div className='thumb w150'>
                        <Image
                          width={150}
                          height={96}
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                          }}
                          className='img-fluid'
                          src={car.IMAGES}
                          alt={car.make}
                        />
                      </div>
                      <div className='details ms-1'>
                        <h6 className='title'>
                          <a href='page-car-single-v1.html'>{`${car.MARKA_NAME} ${car.MODEL_NAME} - ${car.YEAR}`}</a>
                        </h6>
                        <h5 className='price'>{car.AVG_PRICE}</h5>
                      </div>
                    </div>
                  </th>
                  <td className='align-middle'>{car.MARKA_NAME}</td>
                  <td className='align-middle'>{car.LOT}</td>
                  <td className='align-middle'>{car.AUCTION_DATE.split(' ')[0]}</td>
                  <td className='align-middle'>{car.ENG_V}</td>
                  <td className='align-middle'>{car.fuelType}</td>
                  <td className='align-middle'>{car.MILEAGE}</td>
                  <td className='align-middle'>{car.CONDITION}</td>
                  <td className='align-middle'>{car.AVG_PRICE}</td>
                  <td className='align-middle'>{car.COLOR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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

export default Features;
