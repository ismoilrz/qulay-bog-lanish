import insta from "../assets/instagram.svg";
import teleg from "../assets/telelgram.svg";
import num from "../assets/phone.svg";
import git from "../assets/gitHub.svg";

import massage from "../assets/sms.svg";
import portfolio from "../assets/portfolio.svg"

const instagram = "https://www.instagram.com/ismoil.rz?igsh=MWxseG0zanVkbWNrcw==";
const telegram = "http://t.me/Ismoilrz";
const gitHub = "https://github.com/ismoilrz";
const phone = "tel:+998948536747";

const massagee = "https://menga-habar-yuborish.vercel.app";
const portfolioo = "https://portfolio-ismoil-rz.vercel.app";

export const Socials = [
  {
    key: 1,
    logo: teleg,
    name: "TELEGRAM",
    link: telegram,
    username: "@Ismoilrz",
  },
  {
    key: 2,
    logo: insta,
    name: "INSTAGRAM",
    link: instagram,
    username: "@ismoil.rz",
  },
  {
    key: 3,
    logo: git,
    name: "GITHUB",
    link: gitHub,
    username: "ismoilrz",
  },
  {
    key: 4,
    logo: num,
    name: "AOQA UCHUN",
    link: phone,
    username: "+998(94) 8536747",
  },
];

export const Sites = [
    {
        key: 1,
        logo: massage,
        link: massagee,
        name: "TEZKOR HABAR",
        username: "https://menga-habar-yuborish.vercel.app",
    },
    {
        key: 2,
        logo: portfolio,
        link: portfolioo,
        name: "PORTFOLIO",
        username: "https://portfolio-ismoil-rz.vercel.app",
    },
]