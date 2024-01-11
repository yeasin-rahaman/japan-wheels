import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";
import SearchBox from "./SearchBox";
import SelectFilter from "./SelectFilter";
import { saveAuctionSearchData } from "@/app/Redux/dataSlice";
import InputRange from "react-input-range";

const SidebarAdvnaceFilter = () => {
  const dispatch = useDispatch();
  const selectOptions = [
    {
      label: "Select Makes",
      options: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes", "TOYOTA"],
      apiName: "model",
    },
    {
      label: "Select Models",
      options: ["A3 Sportback", "A4", "A6", "Q5"],
      apiName: "Models",
    },
    {
      label: "Color",
      options: ["Red", "Black", "Blue", "White"],
      apiName: "color",

    },

    {
      label: "Condition",
      options: ["Most Recent", "Recent", "Best Selling", "Old Review"],
      apiName: "Condition",
    },

    {
      label: "Select Type",
      options: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV"],
      apiName: "Type",
    },
    {
      label: "Year",
      options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
      apiName: "Year",
    },
  ];


  const allModel = [
    {
      "MARKA_ID": "1",
      "MARKA_NAME": "TOYOTA"
    },
    {
      "MARKA_ID": "2",
      "MARKA_NAME": "NISSAN"
    },
    {
      "MARKA_ID": "3",
      "MARKA_NAME": "MAZDA"
    },
    {
      "MARKA_ID": "4",
      "MARKA_NAME": "MITSUBISHI"
    },
    {
      "MARKA_ID": "5",
      "MARKA_NAME": "HONDA"
    },
    {
      "MARKA_ID": "6",
      "MARKA_NAME": "SUZUKI"
    },
    {
      "MARKA_ID": "7",
      "MARKA_NAME": "SUBARU"
    },
    {
      "MARKA_ID": "8",
      "MARKA_NAME": "ISUZU"
    },
    {
      "MARKA_ID": "9",
      "MARKA_NAME": "DAIHATSU"
    },
    {
      "MARKA_ID": "10",
      "MARKA_NAME": "MITSUOKA"
    },
    {
      "MARKA_ID": "12",
      "MARKA_NAME": "ALFAROMEO"
    },
    {
      "MARKA_ID": "13",
      "MARKA_NAME": "AUDI"
    },
    {
      "MARKA_ID": "14",
      "MARKA_NAME": "BMW"
    },
    {
      "MARKA_ID": "15",
      "MARKA_NAME": "CHRYSLER"
    },
    {
      "MARKA_ID": "16",
      "MARKA_NAME": "CITROEN"
    },
    {
      "MARKA_ID": "17",
      "MARKA_NAME": "DAIMLER"
    },
    {
      "MARKA_ID": "18",
      "MARKA_NAME": "FIAT"
    },
    {
      "MARKA_ID": "19",
      "MARKA_NAME": "FORD"
    },
    {
      "MARKA_ID": "20",
      "MARKA_NAME": "GM"
    },
    {
      "MARKA_ID": "21",
      "MARKA_NAME": "HINO"
    },
    {
      "MARKA_ID": "23",
      "MARKA_NAME": "LEXUS"
    },
    {
      "MARKA_ID": "24",
      "MARKA_NAME": "MERCEDES BENZ"
    },
    {
      "MARKA_ID": "25",
      "MARKA_NAME": "OPEL"
    },
    {
      "MARKA_ID": "26",
      "MARKA_NAME": "PEUGEOT"
    },
    {
      "MARKA_ID": "27",
      "MARKA_NAME": "RENAULT"
    },
    {
      "MARKA_ID": "28",
      "MARKA_NAME": "ROVER"
    },
    {
      "MARKA_ID": "30",
      "MARKA_NAME": "TCM"
    },
    {
      "MARKA_ID": "31",
      "MARKA_NAME": "VOLKSWAGEN"
    },
    {
      "MARKA_ID": "32",
      "MARKA_NAME": "VOLVO"
    },
    {
      "MARKA_ID": "34",
      "MARKA_NAME": "LAND ROVER"
    },
    {
      "MARKA_ID": "35",
      "MARKA_NAME": "LINCOLN"
    },
    {
      "MARKA_ID": "36",
      "MARKA_NAME": "MERCURY"
    },
    {
      "MARKA_ID": "98",
      "MARKA_NAME": "OTHERS"
    },
    {
      "MARKA_ID": "112",
      "MARKA_NAME": "ASTON MARTIN"
    },
    {
      "MARKA_ID": "115",
      "MARKA_NAME": "BENTLEY"
    },
    {
      "MARKA_ID": "116",
      "MARKA_NAME": "BIRKIN"
    },
    {
      "MARKA_ID": "117",
      "MARKA_NAME": "BMW ALPINA"
    },
    {
      "MARKA_ID": "119",
      "MARKA_NAME": "CADILLAC"
    },
    {
      "MARKA_ID": "121",
      "MARKA_NAME": "CHEVROLET"
    },
    {
      "MARKA_ID": "124",
      "MARKA_NAME": "DODGE"
    },
    {
      "MARKA_ID": "126",
      "MARKA_NAME": "FERRARI"
    },
    {
      "MARKA_ID": "128",
      "MARKA_NAME": "GMC"
    },
    {
      "MARKA_ID": "129",
      "MARKA_NAME": "HUMMER"
    },
    {
      "MARKA_ID": "130",
      "MARKA_NAME": "HYUNDAI"
    },
    {
      "MARKA_ID": "132",
      "MARKA_NAME": "JAGUAR"
    },
    {
      "MARKA_ID": "134",
      "MARKA_NAME": "LAMBORGHINI"
    },
    {
      "MARKA_ID": "135",
      "MARKA_NAME": "LANCIA"
    },
    {
      "MARKA_ID": "136",
      "MARKA_NAME": "LOTUS"
    },
    {
      "MARKA_ID": "137",
      "MARKA_NAME": "MASERATI"
    },
    {
      "MARKA_ID": "139",
      "MARKA_NAME": "MINI"
    }
  ]





  const initialFitlter = { color: "", priceMin: "", model: "", page: 1, size: 30, MARKA_NAME: "" }
  const [filter, setFilter] = useState(initialFitlter)

  const fuctiontogetdata = (name = 'color', value = '', clear = false) => {

    const newFilter = { ...filter, [name]: value };
    if (clear) {
      setFilter(initialFitlter);
    } else {
      setFilter(newFilter);
    }
  }
  useEffect(() => {

    dispatch(saveAuctionSearchData(filter));
  }, [dispatch, filter]);

  return (
    <div className="sidebar_widgets">
      <div className="sidebar_widgets_wrapper">
        <div className="sidebar_advanced_search_widget">
          <h4 className="title">Search Filters</h4>
          <ul className="sasw_list mb0">
            <li className="search_area">
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




            <div>
              <li>
                <div className="search_option_two">
                  <div className="candidate_revew_select">
                    <div className="dropdown bootstrap-select w100 show-tick">
                      <select
                        className="form-select dropdown-toggle w100 show-tick"
                        onChange={(e) => fuctiontogetdata('MARKA_NAME', e.target.value)}
                      // Use 'model' instead of 'modell' in the onChange handler
                      >
                        {allModel.map((model, index) => (
                          <option key={index}>{model.MARKA_NAME}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </div>








            <div>
              {selectOptions.map((option, index) => (
                <li key={index}>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <div className="dropdown bootstrap-select w100 show-tick">
                        <select className="form-select dropdown-toggle w100 show-tick" onChange={e =>

                          fuctiontogetdata(option.apiName, e.target.value)}>

                          <option>{option.label}</option>
                          {option.options.map((value, index) => (
                            <option key={index}>{value}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
            {/* End li select filter */}

            <li>
              <h5 className="subtitle">Mileage</h5>
            </li>
            <li className="min_area list-inline-item">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Min"
                  onChange={e => fuctiontogetdata('priceMin', e.target.value)}
                />
              </div>
            </li>
            <li className="max_area list-inline-item">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Max"
                  onChange={e => fuctiontogetdata('priceMax', e.target.value)}

                />
              </div>
            </li>
            {/* End milage */}

            <li>
              <h5 className="subtitle">Price</h5>
            </li>
            <li>
              <div className="advance_search_style style_2 flex-wrap justify-content-between">
                <InputRange
                  formatLabel={() => ``}
                  maxValue={20000}
                  minValue={1000}
                  value={5555}
                  onChange={(value) => handleOnChange(value)}
                  id="slider"
                />
                <span id="slider-range-value1">${111}</span>
                <span id="slider-range-value2">${3333}</span>
              </div>
            </li>
            {/* End range price slider */}

            {/* Fuel Type */}
            <li>
              <h5 className="subtitle">Fuel Type</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"


                  />
                  <label className="form-check-label" htmlFor="flexCheckPetrol">
                    Petrol (676)
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"


                  />
                  <label className="form-check-label" htmlFor="flexCheckDiesel">
                    Diesel (9,784)
                  </label>
                </div>
                {/* Repeat similar structure for electric and hybrid */}
              </div>
            </li>
            {/* Transmission */}
            <li>
              <h5 className="subtitle">Transmission</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"


                  />
                  <label className="form-check-label" htmlFor="flexCheckAutometic">
                    Automatic (6,676)
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"


                  />
                  <label className="form-check-label" htmlFor="flexCheckManual">
                    Manual (9,784)
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Features</h5>
              <div className="sidebar_feature_checkbox">
                <div className="wrapper">
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"


                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Adaptive Cruise Control (6,676)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault2"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault3"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault4"
                    >
                      Remote Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault5"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault6"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault7"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault7"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="search_option_button">
                <button type="submit" className="btn btn-block btn-thm">
                  <span className="flaticon-magnifiying-glass mr10" /> Search
                </button>
              </div>
            </li>




            <li className="text-center">
              <button className="reset-filter" onClick={() => { fuctiontogetdata('color', "", true); }}>
                Reset Filter
              </button>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdvnaceFilter;
