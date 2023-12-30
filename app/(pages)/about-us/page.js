import WhyChoose from "@/app/OurComponents/about-us/WhyChoose";
import Testimonial from "@/app/OurComponents/Common/Testimonial";
import Partner from "@/app/OurComponents/home/Partner";
import LoginSignupModal from "@/app/components/common/login-signup";
import CompanyProfile from "@/app/OurComponents/about-us/CompanyProfile";
import CeoMessage from "@/app/OurComponents/about-us/CeoMessage";
import CompanyPolicy from "@/app/OurComponents/about-us/CompanyPolicy";
import CompanyMotto from "@/app/OurComponents/about-us/CompanyMotto";

export const metadata = {
  title: "About Us || Voiture - Automotive & Car Dealer NextJS Template",
};

const AboutUs = () => {
  return (
    <div className="wrapper">
      {/* Sidebar Panel End */}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">About Us</h2>
                <p className="subtitle">About Us</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">About Us</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* Company Motto */}

      {/* <div data-aos="fade-up" data-aos-delay="80">
        <CompanyMotto />
  </div> */}

      {/* End of Company Motto */}

      {/* Company Profile Content */}
      <section className="about-section pb90 pt0">
        <div className="container">
          <div className="row justify-content-center">
            <CompanyProfile />
          </div>
        </div>
      </section>
      {/* End Company Profile Content */}

      {/* CEO Message Content */}
      <section className="about-section pb90 pt0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="80">
            <CeoMessage />
          </div>
        </div>
      </section>
      {/* CEO Message Content */}

      {/* Testimonials  */}
      <section className="our-testimonials-home1 pt120 pb120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="80">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials  */}

      {/* Company Policy Content */}
      <section className="about-section pb90">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <CompanyPolicy />
            </div>
          </div>
        </div>
      </section>
      {/* End Company Policy Content */}

      {/* Why Chose Us */}
      <section className="why-chose pb90 pt0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* End Why Chose Us */}

      {/* Our Partners */}
      <section className="our-partner pb90 pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Popular Makes</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="partner_divider">
            <div className="row">
              <Partner />
            </div>
            {/* End .row */}
          </div>
        </div>
      </section>
      {/* End  Our Partners */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default AboutUs;
