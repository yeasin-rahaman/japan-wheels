const Social = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "http://www.facebook.com/JapanWheelsWorldwide",
    },
    {
      icon: "fab fa-tiktok",
      link: "https://www.tiktok.com/@japanwheels.com?lang=en",
    },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/japanwheels_worldwide/",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mustafa-khan-303266265/",
    },
  ];

  return (
    <>
      {socialIcons.map((icon, index) => (
        <li className="list-inline-item" key={index}>
          <a href={icon.link}  >
            <i className={icon.icon} />
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
