import Image from "next/image";

const CompanyPolicy = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="about_content" style={{ marginTop: "0" }}>
          <h2 className="main-title" style={{ textAlign: "center" }}>
            Company Policy
          </h2>
          <p className="mb30" style={{ textAlign: "justify" }}>
            At Japan Wheels LLC., we believe in transparency and honesty. That’s
            why we have established a 30-day policy focused on providing all
            necessary information about our vehicles before the purchase. Before
            you make a purchase, our knowledgeable sales team will provide you
            with detailed information about the vehicle, including its history,
            features, and condition. If you have any questions or concerns, we
            encourage you to ask. Our goal is to make sure that you have all the
            information you need to make an informed decision.
            <br />
            Within the first 30 days of your purchase, if you discover any
            information that was not disclosed to you prior to the sale, please
            bring it to our attention. We will work with you to resolve the
            issue to your satisfaction.
            <br />
            At Japan Wheels, we stand behind the quality of our vehicles and
            want to make sure that you have a positive experience. If you have
            any questions or concerns about the information provided before your
            purchase, please don’t hesitate to ask. We’re here to help!
          </p>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default CompanyPolicy;
