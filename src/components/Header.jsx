import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import imgEn from "../assets/images/en.png";
import imgVn from "../assets/images/vn.png";

const Header = ({ title, user }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const hanleChangeLanguage = () => {
    const newLang = selectedLanguage === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    setSelectedLanguage(newLang);
  };

  return (
    <header className="bg-primary1 p-1 flex justify-between items-center">
      <div className="text-white text-xl font-bold">{title}</div>
      <div className="ml-auto relative">
        <img
          src={selectedLanguage === "en" ? imgEn : imgVn}
          alt={selectedLanguage}
          className="w-8 h-5 cursor-pointer mr-3"
          onClick={() => hanleChangeLanguage()}
        />
        
        {/* <div className="text-white" onClick={() => hanleChangeLanguage()}>
          {selectedLanguage === "en" ? "English" : "Việt Nam"}
        </div> */}
      </div>
      {user && (
        <div className="flex items-center space-x-2">
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-11 h-11 rounded-full"
          />
          <span className="text-white">{user.username}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
