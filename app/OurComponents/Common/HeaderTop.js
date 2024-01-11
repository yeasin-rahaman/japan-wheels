import { getUserInfo } from '@/app/Redux/dataSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HeaderTop = () => {
  const socialData = [
    {
      icon: 'fa-brands fa-facebook fa-lg',
      link: 'http://www.facebook.com/JapanWheelsWorldwide',
      color: 'blue',
    },

    {
      icon: 'fab fa-tiktok fa-lg',
      link: 'https://www.tiktok.com/@japanwheels.com?lang=en',
      color: 'black',
    },
    {
      icon: 'fab fa-instagram fa-lg',
      link: 'https://www.instagram.com/japanwheels_worldwide/',
      color: '#F56040',
    },
    {
      icon: 'fab fa-linkedin fa-lg',
      link: 'https://www.linkedin.com/in/mustafa-khan-303266265/',
      color: 'blue',
    },
  ];

  const contactData = [
    {
      icon: 'flaticon-phone-call',
      text: '+8170-4375-4845',
      href: 'tel:+8170-4375-4845',
    },
    {
      icon: 'flaticon-email',
      text: 'mustafa@japanwheels.com',
      href: 'mailto:mustafa@japanwheels.com',
    },
  ];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.japanwheels?.userInfo);
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  return (
    <div className='header_top home3_style dn-992'>
      <div className='container'>
        <div className='row align-items-center '>
          <div className='col-8'>
            <div className='header_top_contact_opening_widget text-center text-md-start'>
              <ul className='mb0'>
                {contactData.map((contact, index) => (
                  <li className='list-inline-item' key={index}>
                    <a href={`${contact?.href}`} target='_blank'>
                      <span className={contact.icon} />
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .col */}

          <div className='col-4'>
            <div className='header_top_social_widgets text-center text-md-end'>
              <ul className='m0'>
                {socialData.map((social, index) => (
                  <li className='list-inline-item' key={index}>
                    <a
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <span
                        className={social.icon}
                        style={{ color: social.color }}
                      />
                    </a>
                  </li>
                ))}
                <li className='list-inline-item'>
                  {user?.name ? (
                    <p>Hi {user?.name}</p>
                  ) : (
                    <a
                      href='#'
                      data-bs-toggle='modal'
                      data-bs-target='#logInModal'>
                      <i className='fa-solid fa-right-to-bracket fa-lg'></i>
                    </a>
                  )}
                </li>
                {user?.name ? (
                  ''
                ) : (
                  <li className='list-inline-item'>
                    <a
                      href='#'
                      data-bs-toggle='modal'
                      data-bs-target='#logInModal'>
                      <i className='fa-solid fa-user-plus fa-lg'></i>
                    </a>
                  </li>
                )}
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
