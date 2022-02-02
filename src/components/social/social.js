import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaKickstarterK,
} from "react-icons/fa";

export const Social = () => {
  const [social] = useState([
    {
      name: "facebook-f",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=100008333795144",
    },
    {
      name: "twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/khaledM25324847",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/khaled_mumo/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      link: "https://github.com/khaliedmuhamad",
    },
    {
      name: "linkedin-in",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/khaled-mohamed-0758781aa/",
    },
    {
      name: "kickstarter-k",
      icon: <FaKickstarterK />,
      link: "https://khalied.netlify.app/",
    },
  ]);
  return (
    <ul className="list-unstyled d-flex row justify-content-center">
      {social.map((el, n) => (
        <a href={el.link} rel="noopener noreferrer" key={n} target="_blank">
          <li className="item-social mt-md-2 col-12" key={`${el.name}-${n}`}>
            {el.icon}
          </li>
        </a>
      ))}
    </ul>
  );
};
