import Image from "next/image";
import CompanyMotto from "@/app/components/pages/about-us/CompanyMotto";

const CompanyProfile = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="about_content" style={{ marginTop: "100px" }}>
          <h1 className="main-title" style={{ textAlign: "center" }}>
            Company Profile
          </h1>
          <p className="mb30" style={{ textAlign: "justify" }}>
            Japan Wheels LLC. is a leading provider of automotive solutions,
            serving customers globally. With a network of locations spanning
            multiple countries, Japan Wheels has established a reputation for
            providing high-quality vehicles and exceptional customer service.
            <br />
            Our mission is to make the car-buying experience as simple and
            stress-free as possible, no matter where you are in the world. Our
            knowledgeable sales team works closely with each customer to
            understand their specific needs and provide customized solutions
            that meet their requirements. With a wide range of vehicles from top
            manufacturers and a global network of resources, we are confident
            that we have something for everyone.
            <br />
            Japan Wheels understands the importance of reliable logistics and
            international shipping. That’s why we have invested in a top-notch
            logistics and shipping infrastructure to ensure that your vehicle is
            delivered on time and in perfect condition. Our team of experts
            handles everything from customs clearance here in Japan to your
            port, so you can rest easy knowing that your vehicle is in good
            hands.
            <br />
            At Japan Wheels, we believe in giving back to our community. We are
            proud to support local charities and organizations in Pakistan, and
            are committed to making a positive impact in the lives of those
            around us. Whether you are in the market for a new or used vehicle,
            Japan Wheels is here to help. With our global network, logistics
            expertise, and international shipping capabilities, we are confident
            that we can meet your needs and exceed your expectations.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <div className="row d-flex justify-content-center">
              <div
                className="col-md-3 p-5"
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <h5 className="title">Mission Statement</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Our mission is to connect the world through wheels, providing
                  tailored solutions for every unique customer while ensuring
                  the highest standards of quality and service
                </p>
              </div>
              <div
                className="col-md-3 p-5"
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <h5 className="title">Vision Statement</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  We envision a world where Japan Wheels not only fuels
                  transportation but also fuels positive change, making a
                  lasting impact on communities, customers, and the automotive
                  landscape.
                </p>
              </div>
              <div
                className="col-md-3 p-5"
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <h5 className="title">Company Values</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Japan Wheels LLC emphasizes diversity, innovative leadership,
                  global unity, customer-centricity, integrity, and
                  environmental responsibility, while excelling in logistics and
                  promoting adaptive resilience.
                </p>
              </div>
            </div>
          </div>

          <h2 className="main-title" style={{ textAlign: "center" }}>
            Company Statement
          </h2>
          <p
            className="mb30"
            style={{
              marginBottom: "0",
              fontSize: "1.2em",
              textAlign: "justify",
            }}
          >
            <em>
              “Our company is dedicated to providing high-quality automotive
              products and services to our customers. With a focus on innovation
              and customer satisfaction, we strive to stay ahead of the
              competition and offer the latest in automotive technology. From
              sales to maintenance, our knowledgeable and experienced team is
              here to help every step of the way. Join us in our commitment to
              making the automotive industry better for everyone.”
            </em>
          </p>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default CompanyProfile;
