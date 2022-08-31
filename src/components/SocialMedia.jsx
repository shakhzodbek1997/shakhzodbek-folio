import React from "react";
import {
  BsTelegram,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://telegram.me/ShYuldoshov"
        >
          <BsTelegram />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.facebook.com/shakhzodbek.yuldoshev/"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.instagram.com/shakhzodbek_yuldashev/"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shakhzod-yuldoshov"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://wa.me/+48575829114"
        >
          <BsWhatsapp />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://github.com/shakhzodbek1997"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
