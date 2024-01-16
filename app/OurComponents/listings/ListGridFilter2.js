import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveAuctionSearchData,
  saveCarDetailsPaginationData,
} from '@/app/Redux/dataSlice';

const ListGridFilter2 = ({ totalListing }) => {
  const dispatch = useDispatch();

  const auctionSearchData = useSelector(
    (state) => state.japanwheels?.auctionSearchData
  );

  const sizes = [30, 50, 100, 200, 300, 400, 500];
  const [selectedSize, setSelectedSize] = useState(sizes[30]); // Set the default selected size
  console.log(
    '🚀 ~ file: ListGridFilter2.js:24 ~ ListGridFilter2 ~ selectedSize:',
    selectedSize
  );

  useEffect(() => {
    dispatch(
      saveAuctionSearchData({ ...auctionSearchData, size: selectedSize })
    );
  }, [selectedSize]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const selectSizes = sizes.map((size, index) => (
    <option key={index}>{size}</option>
  ));

  return (
    <div className='listing_filter_row db-767'>
      <div className='col-md-4'>
        <div className='page_control_shorting left_area tac-sm mb30-767 mt15'>
          <p>
            We found <span className='heading-color fw600'>{totalListing}</span>{' '}
            Cars available for you
          </p>
        </div>
      </div>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
        <div className='page_control_shorting right_area text-end tac-xsd'>
          <ul className='d-flex align-items-center justify-content-md-end justify-content-center'>
            <li className='list-inline-item short_by_text listone'>
              Per Page:
            </li>
            <li className='list-inline-item listwo'>
              <select
                className='form-select show-tick'
                value={selectedSize}
                onChange={handleSizeChange}>
                {selectSizes}
              </select>
            </li>
            <li
              className='btn btn-thm filter_open_btn style2 fltr_btn_hf_map d-none db-md'
              data-bs-toggle='offcanvas'
              data-bs-target='#advanceSearchMobile'
              aria-controls='advanceSearchMobileLabel'>
              <Image
                width={50}
                height={50}
                src='/images/icon/filter-icon.svg'
                alt='icon'
              />
              Show Filter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter2;
