import Link from "next/link";
import MainMenu from "../../components/common/MainMenu";
import Image from "next/image";
import HeroFilter from "../../components/home/home-6/HeroFilter";
import userImage from "./../../../public/images/userImage.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/app/Redux/dataSlice";
import Swal from "sweetalert2";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.japanwheels?.userInfo);

  return (
    <header className="header-nav menu_style_home_one home6_style transparent main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr d-flex justify-content-between  align-content-center ">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Link href="/" className="navbar_brand float-start dn-md">
            <Image
              width={200}
              height={150}
              className="logo1 img-fluid"
              src="/images/logo.svg"
              alt="header-logo.svg"
            />
            <Image
              width={150}
              height={100}
              className="logo2 img-fluid"
              src="/images/logo.svg"
              alt="header-logo2.svg"
            />
          </Link>
          {/* Responsive Menu Structure*/}
          <ul
            id="respMenu"
            className="ace-responsive-menu menu_list_custom_code wa float-start"
          >
            <MainMenu />
          </ul>

          <ul className="ace-responsive-menu menu_list_custom_code wa text-end">
            <li
              className="list_c"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSearch"
            >
              <a href="#">
                <span className="flaticon-magnifiying-glass icon vam"></span>
              </a>
            </li>
            <li className="add_listing">
              <Link href="/add-listings">
                + <span className="dn-lg">Add Listing</span>
              </Link>
            </li>{" "}
            {/* User Img Start  */}
            {user?.name && (
              <li className="dropitem">
                <Image
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                  }}
                  className="userImage"
                  src={userImage}
                  alt="header-logo.svg"
                />
                <ul className="sub-menu">
                  <li className="dropitem ">
                    <Link href="/dashboard" className="active ">
                      <span className="text-dark">Dashboard</span>
                    </Link>
                  </li>
                  <li className="dropitem ">
                    <Link href="#" className="active ">
                      <span className="text-dark">Profile</span>
                    </Link>
                  </li>
                  <li className="dropitem">
                    <Link
                      href="/"
                      className="active"
                      onClick={() => {
                        localStorage.clear();
                        dispatch(getUserInfo());
                        Swal.fire({
                          position: 'top-center',
                          icon: 'success',
                          title: 'Logout successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                      }}
                    >
                      <span className="text-dark">Logout</span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {/* User image end   */}
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt0" role="button">
                <span />
              </a>
            </li>
          </ul>
          {/* End header right content */}

          {/* Start header search popup */}
          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasSearch"
            aria-labelledby="offcanvasSearchLabel"
            style={{ height: "100vh" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex align-items-center justify-content-center h-100">
              <div className="advance_search_panel text-center">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
          {/* End header search popup */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
