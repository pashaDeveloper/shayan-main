// src/components/SocialNav.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { SiAparat, SiTelegram } from 'react-icons/si';

const SocialNav = () => {
  const socialLinks = [
    { name: 'Telegram', icon: <SiTelegram />, color: 'bg-[#0088cc]', url: 'https://t.me/2shigroup' },
    { name: 'Instagram', icon: <FaInstagram />, color: 'bg-[#E1306C]', url: 'https://instagram.com/2shigroup' },
    { name: 'Youtube', icon: <FaYoutube />, color: 'bg-[#ff0000]', url: 'https://youtube.com/@2shigroup' },
    { name: 'Aparat', icon: <SiAparat />, color: 'bg-[#ed145b]', url: 'https://aparat.com/2shigroup' },
    { name: 'Facebook', icon: <FaFacebookF />, color: 'bg-[#4267B2]', url: 'https://facebook.com/2shigroup' },
    { name: 'Twitter', icon: <FaTwitter />, color: 'bg-[#1DA1F2]', url: 'https://twitter.com/2shigroup' },
    { name: 'Linkedin', icon: <FaLinkedinIn />, color: 'bg-[#2867B2]', url: 'https://linkedin.com/in/2shigroup' },
    { name: 'Github', icon: <FaGithub />, color: 'bg-[#333]', url: 'https://github.com/2shigroup' },
  ];

  return (
    <nav className="fixed z-40 top-1/2 -translate-y-1/2 w-[40px] shadow-lg transition-all duration-300 md:w-[60px] rounded-full ">
      <ul>
        {socialLinks.map((social, index) => (
          <li key={index} className="h-[36px] rounded-full  relative group md:h-[55px]">
            <a
              href={social.url}
              target="_blank"
              className={`flex items-center h-full    w-full pr-[20%] border-b border-black/40 transition-all duration-300 ${social.color} text-white hover:w-[130px] md:hover:w-[180px]`}
            >
              <i className="absolute   left-3 rtl:right-3 text-[20px] md:text-[24px]">{social.icon}</i>
              <span className="hidden   group-hover:block font-bold uppercase text-sm tracking-wide ltr:pl-[35%] rtl:pr-[30%]">
                {social.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNav;