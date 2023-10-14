
import HeroFilter from "@/app/OurComponents/home/HeroFilter";
import CarType from "@/app/OurComponents/home/CarType";
import Hero from "@/app/OurComponents/home/Hero";
import Testimonial from "@/app/OurComponents/Common/Testimonial";
import Blog from "@/app/OurComponents/home/Blog";
import Category from "@/app/OurComponents/home/Category";
import PopularVehicles from "../OurComponents/home/PopularVehicles";
import Partner from "@/app/OurComponents/home/Partner";
import IntroCar from "@/app/OurComponents/home/IntroCar";
import Counter from "@/app/OurComponents/Common/Counter";

export const metadata = {
    title: "Home || Voiture - Automotive & Car Dealer NextJS Template",
    description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};


const Home = () => {
    return (
        <div>
            <div className="">
                {/* Hero Section */}
                <Hero />
                {/* End Hero Section */}

                {/* How It Works with filter */}
                <section className="whychose_us pb80 pt0">
                    <div className="container">
                        <div className="row mb20">
                            <div className="col-lg-10 m-auto">
                                <div className="advance_search_panel home2_style">
                                    <div className="row">
                                        <HeroFilter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End container */}
                </section>
                {/* End How It Works with filter */}

                {/* Car Category */}
                <section className="car-category mobile_space bgc-f9  pb80 ">
                    <div className="container">
                        <div className="row">
                            <Category />
                        </div>
                    </div>
                </section>
                {/* End Car Cartegory */}

                {/* Our CarType  */}
                <section className="popular-listing pb80 pt80 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="main-title text-center">
                                    <h2>Browse By Type</h2>
                                </div>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="row">
                            <CarType />
                        </div>
                        {/* End .row */}
                    </div>
                </section>
                {/* End Our CarType  */}

                {/* Our Popular Listing */}
                <section className="popular-listing pt0 pb80 ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="main-title text-center">
                                    <h2>Popular Vehicles</h2>
                                </div>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="col-lg-12">
                            <div
                                className="home1_popular_listing home4_style"
                                data-aos="fade"
                                data-aos-delay="100"
                            >
                                <div className="listing_item_car_grid_slider ">
                                    <PopularVehicles />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Our Popular Listing */}


                {/* Our Partners */}
                <section className="our-partner pt0 pb80">
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

                {/* Half Bg Img Divider  */}
                <IntroCar />
                {/* Half Bg Img Divider  */}

                {/* Funfact Counter  */}
                <section className="our-funfact pb80">
                    <div className="container">
                        <div className="row">
                            <Counter />
                        </div>
                    </div>
                </section>
                {/* End Funfact Counter */}


                {/* Our Testimonials */}
                <section className="our-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="main-title text-center">
                                    <h2>Our Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <Testimonial />
                            </div>
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End .container */}
                </section>
                {/* End Our Testimonials */}




                {/* Our Blog */}
                <section className="our-blog pb80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="main-title text-center">
                                    <h2>Recent Articles</h2>
                                </div>
                            </div>
                        </div>
                        {/* End .row */}

                        <div className="row">
                            <Blog />
                        </div>
                        {/* End .row */}
                    </div>
                </section>
                {/* End Our Blog */}

            </div>
        </div>
    );
};

export default Home;