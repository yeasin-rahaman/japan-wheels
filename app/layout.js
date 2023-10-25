"use client";
import Aos from "aos";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import { Providers } from "./Redux/provider";
import "../public/scss/main.scss";
import styled from "styled-components";
import LoginSignupModal from "./OurComponents/Common/login-signup";
import HeaderSidebar from "./OurComponents/Common/HeaderSidebar";
import HeaderTop from "./OurComponents/Common/HeaderTop";
import Header from "./OurComponents/Common/Header";
import MobileMenu from "./OurComponents/Common/MobileMenu";
import WhatsappButton from "./OurComponents/Common/WhatsappButton";
import Footer from "./OurComponents/Common/footer/Footer";


if (typeof window !== "undefined") {
  import("bootstrap");
}

const inter = Inter({ subsets: ["latin"] });

const Body = styled.body`
  font-family: ${inter.family};
  font-size: ${inter.fontSize};
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <Providers>
      <html lang="en">
        {/* <Body cz-shortcut-listen="false"> */}
        <Body >
          <div className="wrapper ovh">
            {/* Sidebar Panel Start */}

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <HeaderSidebar />
            </div>
            {/* Sidebar Panel End */}
            <HeaderTop></HeaderTop>
            {/* Main Header Nav */}
            <Header />
            {/* End Main Header Nav */}

            {/* Main Header Nav For Mobile */}
            <MobileMenu />
            {/* End Main Header Nav For Mobile */}




            {children}




            {/* Our Footer */}
            <Footer />
            {/* End Our Footer */}

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
            {/* <ScrollToTop /> */}
            <WhatsappButton />
          </div>

        </Body>


      </html>
    </Providers>
  );
}
