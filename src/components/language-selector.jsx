import {useTranslation} from "react-i18next";

const languages = [
  {code: "en", lang: "EN"},
  {code: "az", lang: "AZ"},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lng-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected lng" : "lng"}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;