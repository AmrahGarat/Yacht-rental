import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import AzFlag from "@/assets/images/Azerbaijan.png";
import EnFlag from "@/assets/images/English.svg";
import RuFlag from "@/assets/images/Russia.png";

interface ILang {
  code: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const lang = localStorage.getItem("lang");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>(lang || "en");
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown container

  const languages: ILang[] = [
    { code: "az", flag: AzFlag },
    { code: "en", flag: EnFlag },
    { code: "ru", flag: RuFlag },
  ];

  const handleSelect = (lang: ILang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang.code);
    // localStorage.setItem("lang", lang.code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      {/* Select Button */}
      <button
        className="flex items-center gap-2 !w-20 sm:w-auto px-4 py-2 bg-gray-100 text-secondary rounded shadow hover:bg-gray-200 focus:outline-none justify-between sm:justify-start transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          {languages.find((lang) => lang.code === selectedLang)?.flag && (
            <img
              width={30}
              src={languages.find((lang) => lang.code === selectedLang)?.flag}
              alt={selectedLang}
            />
          )}
          <span className="uppercase">{t(selectedLang)}</span>
        </div>
        <div className="sm:hidden">
          {isOpen ? (
            <ChevronUp size={20} color="white" />
          ) : (
            <ChevronDown size={20} color="white" />
          )}
        </div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden top-12 left-0 w-full bg-primary rounded z-10 transform transition-all duration-300 ease-in-out shadow-select ${
          isOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        } overflow-y-auto`}
      >
        <div className="flex justify-end p-2">
          <X
            size={20}
            color="white"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="space-y-2 py-2 px-4">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex text-white items-center gap-2 px-4 py-2 duration-200 hover:text-secondary cursor-pointer rounded hover:bg-main/20"
              onClick={() => {
                if (lang.code !== selectedLang) {
                  handleSelect(lang);
                } else {
                  setIsOpen((prev) => !prev);
                }
              }}
            >
              <img width={20} src={lang.flag} alt={lang.code} />
              <span>{t(lang.code)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Dropdown Menu */}
      {isOpen && (
        <ul className="hidden sm:flex flex-col absolute -right-10 mt-[10px] w-30 bg-gray-200 rounded z-10 shadow-select cursor-pointer ">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center gap-2 px-4 py-2 duration-200 hover:text-secondary cursor-pointer"
              onClick={() => handleSelect(lang)}
            >
              <img width={20} src={lang.flag} alt={lang.code} />
              <span className="uppercase">{t(lang.code)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
