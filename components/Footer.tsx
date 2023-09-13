import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import ButtonLogo from "./ButtonLogo";

const iconList = [
  {
    name: "discord",
    href: "https://discord.gg/mcSKgr7K3C",
    icon: <FontAwesomeIcon height={20} icon={faDiscord} />,
  },
  {
    name: "facebook",
    href: "https://facebook.com/WrdieOfficial",
    icon: <FontAwesomeIcon height={20} icon={faFacebookSquare} />,
  },
  {
    name: "twitter",
    href: "https://twitter.com/WrdieOfficial",
    icon: <FontAwesomeIcon height={20} icon={faTwitter} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-cafe-noir ">
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 flex md:items-center justify-between lg:px-8">
        <div className="flex text-gray-200 hover:text-white justify-center space-x-6 order-2">
          {iconList.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="flex text-xs items-baseline flex-row md:order-1 space-x-2 text-white">
          <ButtonLogo height={25} fill="white" stroke="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
