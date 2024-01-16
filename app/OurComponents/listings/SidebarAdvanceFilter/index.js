import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RangeSlider from './RangeSlider';
import SearchBox from './SearchBox';
import SelectFilter from './SelectFilter';
import { saveAuctionSearchData } from '@/app/Redux/dataSlice';
import InputRange from 'react-input-range';
import { min } from 'moment';
import YearRange from './YearRange';

const SidebarAdvnaceFilter = () => {
  const dispatch = useDispatch();

  const initialFitlter = {
    color: '',
    priceMin: '',
    model: '',
    page: 1,
    size: 30,
    brand: '',
    range: 0,
    yearMax: "",
    yearMin: "",

  };
  const [filter, setFilter] = useState(initialFitlter);

  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.japanwheels.com/api/auction-dynamic-search?page=1&size=30&marka_id=${filter.brand}&model_id=${filter.model}&from_year&to_year&color=${filter.color}&from_mileage&to_mileage&grade&lot=&auction&auction_date&eng_v&pw&kuzov`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setListData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [filter]);



  const fuctiontogetdata = (name = '', value = '', clear = false) => {
    const newFilter = { ...filter, [name]: value };
    if (clear) {
      setFilter(initialFitlter);
    } else {
      setFilter(newFilter);
    }
  };
  useEffect(() => {
    dispatch(saveAuctionSearchData(filter));
  }, [filter]);





  const [yearValueFilter, setYearValueFilter] = useState({ value: { min: 0, max: 0 } });
  useEffect(() => {
    console.log('valueFromChild', yearValueFilter.value);
    if (yearValueFilter.value.max !== 0) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        yearMax: yearValueFilter.value.max,
        yearMin: yearValueFilter.value.min,
      }));
    }
  }, [yearValueFilter]);



  const handleChildValueYear = (value) => {
    setYearValueFilter(value);
  };

  return (
    <div className='sidebar_widgets'>
      <div className='sidebar_widgets_wrapper'>
        <div className='sidebar_advanced_search_widget'>
          <h4 className='title'>Search Filters</h4>
          <ul className='sasw_list mb0'>
            <li className='search_area'>
              {/* <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={e => fuctiontogetdata('keyword', e.target.value)}

                  placeholder="Enter Keyword"
                />
              </div>{" "} */}
            </li>
            {/* End .search_area */}
            <li>
              <div className='search_option_two'>
                <div className='candidate_revew_select'>
                  <div className='dropdown bootstrap-select w100 show-tick'>
                    <select
                      className='form-select dropdown-toggle w100 show-tick'
                      onChange={(e) =>
                        fuctiontogetdata('brand', e.target.value)
                      }>
                      <option>Marka NAME</option>
                      {listData?.markas?.map((model, index) => (
                        <option key={index}>{model}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className='search_option_two'>
                <div className='candidate_revew_select'>
                  <div className='dropdown bootstrap-select w100 show-tick'>
                    <select
                      className='form-select dropdown-toggle w100 show-tick'
                      onChange={(e) =>
                        fuctiontogetdata('model', e.target.value)
                      }>
                      <option>MODEL NAME</option>
                      {listData.models?.map((model, index) => (
                        <option key={index}>{model}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='search_option_two'>
                <div className='candidate_revew_select'>
                  <div className='dropdown bootstrap-select w100 show-tick'>
                    <select
                      className='form-select dropdown-toggle w100 show-tick'
                      onChange={(e) =>
                        fuctiontogetdata('color', e.target.value)
                      }>
                      <option>Color</option>
                      {listData.colors?.map((model, index) => (
                        <option key={index}>{model}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </li>

            {/* End li select filter */}

            <li>
              <h5 className='subtitle'>Year</h5>
            </li>


            {
              listData.max_year && listData.min_year ?
                <YearRange
                  listData={listData}
                  onChildValueYear={handleChildValueYear}
                ></YearRange>

                :
                <></>
            }


            {/* Fuel Type */}
            <li>
              <h5 className='subtitle'>Fuel Type</h5>
              <div className='ui_kit_checkbox'>
                <div className='form-check mb20'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label' htmlFor='flexCheckPetrol'>
                    Petrol (676)
                  </label>
                </div>
                <div className='form-check mb20'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label' htmlFor='flexCheckDiesel'>
                    Diesel (9,784)
                  </label>
                </div>
                {/* Repeat similar structure for electric and hybrid */}
              </div>
            </li>
            {/* Transmission */}
            <li>
              <h5 className='subtitle'>Transmission</h5>
              <div className='ui_kit_checkbox'>
                <div className='form-check mb20'>
                  <input className='form-check-input' type='checkbox' />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckAutometic'>
                    Automatic (6,676)
                  </label>
                </div>
                <div className='form-check mb30'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label' htmlFor='flexCheckManual'>
                    Manual (9,784)
                  </label>
                </div>
              </div>
            </li>

            <li>
              <div className='search_option_button'>
                <button type='submit' className='btn btn-block btn-thm'
                  onClick={() => {
                    fuctiontogetdata('color', '', true);
                  }}>
                  <span className=' mr10' /> Reset Filter
                </button>
              </div>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdvnaceFilter;
