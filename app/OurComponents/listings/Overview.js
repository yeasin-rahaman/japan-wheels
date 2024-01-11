const Overview = ({ detailsData }) => {
  const carData = [
    { label: "Make", value: "Volvo" },
    { label: "Model", value: "XC 90" },
    { label: "Color", value: "white" },
    { label: "Price", value: "120" },
    { label: "Drive Type", value: "4x4" },
    { label: "Transmission", value: "Automatic" },
    { label: "Condition", value: "Used" },
    { label: "Year", value: "2021" },
    { label: "Mileage", value: "280,000" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Engine Size", value: "5.2L" },
    { label: "Doors", value: "5" },
    { label: "Cylinders", value: "10" },
    { label: "VIN", value: "2D456THA798700213GT21" },
  ];
  console.log("im over view", detailsData);

  return (
    <ul className="list-group">

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Make</div>
        </div>
        <span className="schedule">{detailsData?.MARKA_NAME}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Model</div>
        </div>
        <span className="schedule">{detailsData?.MODEL_NAME}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Year</div>
        </div>
        <span className="schedule">{detailsData?.YEAR}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Color</div>
        </div>
        <span className="schedule">{detailsData?.COLOR}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Price</div>
        </div>
        <span className="schedule">${detailsData?.AVG_PRICE}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Mileage</div>
        </div>
        <span className="schedule">{detailsData?.MILEAGE}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Grade</div>
        </div>
        <span className="schedule">{detailsData?.GRADE}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Lot Number</div>
        </div>
        <span className="schedule">{detailsData?.LOT}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Auction</div>
        </div>
        <span className="schedule">{detailsData?.AUCTION}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">Auction Date</div>
        </div>
        <span className="schedule">{detailsData?.AUCTION_DATE.split(" ")[0]}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">ENG V</div>
        </div>
        <span className="schedule">{detailsData?.ENG_V}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">PW </div>
        </div>
        <span className="schedule">{detailsData?.PW}</span>
      </li>

      <li
        className="list-group-item d-flex justify-content-between align-items-start">
        <div className="me-auto">
          <div className="day">KUZOV </div>
        </div>
        <span className="schedule">{detailsData?.KUZOV}</span>
      </li>

    </ul>
  );
};

export default Overview;
