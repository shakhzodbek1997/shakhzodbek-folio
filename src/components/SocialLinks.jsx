import React from "react";
import {
  BsTelegram,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="app__socialLinks">
    
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://telegram.me/ShYuldoshov"
        >
          <BsTelegram className="socialLinkIcon"/>
        </a>
    
    
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.facebook.com/shakhzod.yuldoshov"
        >
          <FaFacebookF className="socialLinkIcon"/>
        </a>
    
    
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.instagram.com/shakhzod_yuldoshov"
        >
          <BsInstagram className="socialLinkIcon"/>
        </a>
    
    
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shakhzod-yuldoshov"
        >
          <BsLinkedin className="socialLinkIcon"/>
        </a>
    
    
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://wa.me/+48575829114"
        >
          <BsWhatsapp className="socialLinkIcon" />
        </a>
    
    
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://github.com/shakhzodbek1997"
        >
          <BsGithub className="socialLinkIcon"/>
        </a>
    </div>
  
  );
};

export default SocialLinks;
