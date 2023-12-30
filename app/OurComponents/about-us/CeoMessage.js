import Image from "next/image";

const CeoMessage = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={636}
            height={667}
            priority={true}
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/about/ceo.png"
            alt="ceo"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div
          className="about_content"
          style={{ marginTop: "100px", textAlign: "justify" }}
        >
          <h2 className="title">CEO Message</h2>
          <p className="mb30">
            Japan Wheels has always strived to meet the needs of our customers
            and partners by transforming our business models and approaches in
            line with changing times. Having acquired experience in local
            market, we are going global, calling for us to “Transform and
            Innovate” across the company.
            <br />
            By building on our core strengths and fully leveraging our global
            network, business infrastructure, knowledge and diversity, we will
            continue to strive towards our most ambitious goal of connecting
            Japan with our customers abroad.
            <br />I am extremely passionate about automobiles and being part of
            an Automobile exporting business, I feel truly lucky to share this
            passion with my customers as well.
            <br />
            In addition to fulfilling my social responsibilities, I continue to
            focus all of our corporate resources on providing professional
            services to meet my customers’ needs. To this end, I would like to
            ask for your continued support and patronage to help us serve all
            our customers.
          </p>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default CeoMessage;
