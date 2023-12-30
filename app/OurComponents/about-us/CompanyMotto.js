import Image from "next/image";

const CompanyMotto = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", margin: "100px" }}>
          <em>Driven by Diversity, Powered by Quality.</em>
        </h1>
        <Image
          width={1900}
          height={667}
          className="img-fluid"
          priority={true}
          style={{ objectFit: "cover" }}
          src="/images/about/companyMotto.jpg"
          alt="ceo"
        />
      </div>

      {/* End .col */}
    </>
  );
};

export default CompanyMotto;
