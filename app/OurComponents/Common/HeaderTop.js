import { useDispatch, useSelector } from "react-redux";

const HeaderTop = () => {
  const socialData = [
    {
      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      icon: "fab fa-linkedin",
      link: "#",
    },
  ];

  const contactData = [
    {
      icon: "flaticon-phone-call",
      text: "+8170-4375-4845",
      href: "tel:+8170-4375-4845"
    },
    {
      icon: "flaticon-email",
      text: "mustafa@japanwheels.com",
      href: "mailto:mustafa@japanwheels.com"
    },
    {
      icon: "flaticon-map",
      text: "116-002 Arakawa-Ku, Arakawa 3-6-4 Tokyo, Japan",
      href: ""
    },

  ];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.japanwheels?.userInfo);
  return (
    <div className="header_top home3_style dn-992">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="header_top_contact_opening_widget text-center text-md-start">
              <ul className="mb0">
                {contactData.map((contact, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href={`${contact?.href}`}>
                      <span className={contact.icon} />
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .col */}

          <div className="col-4">
            <div className="header_top_social_widgets text-center text-md-end">
              <ul className="m0">
                {socialData.map((social, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href={social.link}>
                      <span className={social.icon} />
                    </a>
                  </li>
                ))}
                <li className="list-inline-item">
                  {user?.name ? <p>Hi {user?.name}</p> : <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#logInModal"
                  >
                    Login
                  </a>}
                </li>
                {user?.name ? '' : <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#logInModal"
                  >
                    Register
                  </a>
                </li>}
              </ul>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default HeaderTop;
