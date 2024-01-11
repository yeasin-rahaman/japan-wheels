"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroFilter = () => {
  const router = useRouter();

  const backgroundColor = "#000000"; // Black color
  const transparency = 0.5; // 0 for fully transparent
  const blur = 100; // 100% blur
  const [selectedStatus, setSelectedStatus] = useState("Cars");

  const carsFilters = [
    {
      label: "Make",
      options: [
        "Select Makes",
        "Audi",
        "BMW",
        "Cadillac",
        "Chevrolet",
        "Daihatsu",
        "Ford",
        "Hino",
        "Honda",
        "Jaguar",
        "Jeep",
        "Land Rover",
        "Lexus",
        "Mazda",
        "Mercedez-Benz",
        "Mitsubishi",
        "Nissan",
        "Peugeot",
        "Subaru",
        "Suzuki",
        "Toyota Pixis",
        "Volswagen",
        "Volvo",
      ],
    },
    {
      label: "Year",
      options: ["Select One", "2023", "2022", "2021", "2020"],
    },
    {
      label: "Transmission",
      options: ["Select One", "Automatic", "Manual", "Tiptronic"],
    },
    {
      label: "Damage",
      options: ["Select One", "Yes", "No"],
    },
    {
      label: "Fuel",
      options: [
        "Select One",
        "Diesel",
        "Gasoline",
        "Hybrid",
        "Electric",
        "Biodiesel",
        "CNG",
        "Ethanol",
        "Other",
      ],
    },
    {
      label: "Body Type",
      options: [
        "Select One",
        "Sedan",
        "Coupe",
        "Hatchback",
        "Station Wagon",
        "SUV",
        "Pickup",
        "Van",
        "Mini Van",
        "Convertible",
        "Bus",
        "Truck",
        "Heavy Equipment",
        "Other",
      ],
    },
    {
      label: "Condition",
      options: ["Select One", "New", "Used", "Accidental", "Damaged"],
    },
    {
      label: "Car Name",
      options: ["Select One"],
    },
    {
      label: "CC",
      options: [
        "Select One",
        "660",
        "850",
        "1000",
        "1300",
        "1500",
        "1800",
        "2000",
        "2500",
        "2700",
        "4000",
        "6200",
      ],
    },
    {
      label: "Interior Color",
      options: ["Select One"],
    },
    {
      label: "Exterior Color",
      options: [
        "Select One",
        "White",
        "Black",
        "Gray",
        "Silver",
        "Blue",
        "Red",
        "Brown",
        "Green",
        "Orange",
        "Beige",
      ],
    },
    {
      label: "RHD/LHD",
      options: ["Select One", "Left Hand Drive", "Right Hand Drive"],
    },
    {
      label: "Min Year",
      options: ["Select One", "2023", "2022", "2021"],
    },
    {
      label: "Max Year",
      options: ["Select One", "2023", "2022", "2021"],
    },
    {
      label: "Price Range",
      options: [
        "Select One",
        "2000 - 4000 $",
        "4000 - 6000 $",
        "6000 - 8000 $",
        "8000 - 10000 $",
        "10000 - 12000 $",
        "12000 - 14000 $",
        "14000 - 16000 $",
        "16000 - 18000 $",
        "18000 - 20000 $",
        "Above 20000 $",
      ],
    },
  ];
  const autoPartsFilters = [
    {
      label: "Make",
      options: [
        "Select Makes",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      label: "Models",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Make",
      options: [
        "Select Makes",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      label: "Models",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
  ];
  const onePriceFilters = [
    {
      label: "Make",
      options: [
        "Select Makes",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      label: "Models",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Make",
      options: [
        "Select Makes",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      label: "Models",
      options: ["Select Models", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
  ];

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="col-lg-12">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "Cars" && "active"}`}
            onClick={() => handleStatusClick("Cars")}
            style={{width:'150px'}}
          >
            Cars         </button>
        </li>
        <li className="nav-item" role-presentation="">
          <button
            className={`nav-link ${
              selectedStatus === "Auto Parts" && "active"
            }`}
            style={{width:'150px'}}

            onClick={() => handleStatusClick("Auto Parts")}
          >
            Auto Parts
          </button>
        </li>
        <li className="nav-item" role-presentation="">
          <button
            className={`nav-link ${
              selectedStatus === "One Price" && "active"
            }`}
            style={{width:'150px'}}

            onClick={() => handleStatusClick("One Price")}
          >
            One Price
          </button>
        </li>
      </ul>

      <div
        className="glassmorphism-div adss_bg_stylehome1 "
        style={{
          backdropFilter: `blur(${blur}px)`,
          background: `rgba(${parseInt(
            backgroundColor.slice(1, 3),
            16
          )}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(
            backgroundColor.slice(5, 7),
            16
          )}, ${transparency})`,
        }}
      >
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            {selectedStatus == "Cars"
              ? carsFilters.map((filter) => (
                  <li className="list-inline-item mt-2" key={filter.label}>
                    <div className="select-boxes">
                      <div className="car_brand">
                        <h6 className="title text-white">{filter.label}</h6>
                        <select className="form-select text-white">
                          {filter.options.map((option) => (
                            <option key={option} className="text-dark">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                ))
              :selectedStatus == "One Price"?  onePriceFilters.map((filter) => (
                  <li className="list-inline-item mt-2" key={filter.label}>
                    <div className="select-boxes">
                      <div className="car_brand">
                        <h6 className="title text-white">{filter.label}</h6>
                        <select className="form-select text-white">
                          {filter.options.map((option) => (
                            <option key={option} className="text-dark">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                )): autoPartsFilters.map((filter) => (
                  <li className="list-inline-item mt-2" key={filter.label}>
                    <div className="select-boxes">
                      <div className="car_brand">
                        <h6 className="title text-white">{filter.label}</h6>
                        <select className="form-select text-white">
                          {filter.options.map((option) => (
                            <option key={option} className="text-dark">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
          <div className="d-block mt-3 mx-auto text-center">
            <button
              onClick={() => router.push("/listing-v4")}
              className="btn btn-thm advnc_search_form_btn"
            >
              <span className="flaticon-magnifying-glass" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
