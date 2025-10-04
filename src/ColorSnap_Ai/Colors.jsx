import React, { useState, useContext } from "react";
import "./Color.css";
import ThemeContext from "./ThemeContext";

import { FaTrash, FaSearch, FaDice } from "react-icons/fa";

function Color() {
  const { language } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const [colorsList, setColorsList] = useState([
    { id: 1, name: "Blue", hex: "#2196F3" },
    { id: 2, name: "Red", hex: "#F44336" },
    { id: 3, name: "Green", hex: "#4CAF50" },
    { id: 4, name: "Yellow", hex: "#FFEB3B" },
    { id: 5, name: "Black", hex: "#000000" },
    { id: 6, name: "White", hex: "#FFFFFF" },
  ]);

  const [selectedColors, setSelectedColors] = useState([]);
  const [customHex, setCustomHex] = useState("");
  const [showSites, setShowSites] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);

 const websites = [
    { id: 1, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/36695198/file/original-9528aeefbc8715f33ecbfb32f3e2c0b9.png?resize=1600x1200&vertical=center", colors: [1,2,] },
    { id: 2, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/44132875/file/original-27048358dacf46971089a104d621783a.jpg?resize=1504x1128&vertical=center", colors: [1,3,] },
     { id: 31, name: "Example Site", img: "https://cdn.dribbble.com/userupload/16154008/file/original-7bc2458338469608453d70002b8a2ca4.png?resize=1504x846&vertical=center", colors: [1,3,] },
      { id: 32, name: "Example Site", img: "https://cdn.dribbble.com/userupload/43050519/file/original-194467c5f6b35a96ec06bd8cde60870e.jpg?resize=1504x1128&vertical=center", colors: [1,3,] },
    { id: 3, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/11107222/file/original-649355467183cb4a3cd53e2e85f24012.jpg?resize=1504x1128&vertical=center", colors: [1,4] },
    { id: 4, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/43819762/file/original-8be0eb84ee88dee6ba4b5badc080d4a1.jpg?resize=1024x745&vertical=center", colors: [1,5] },
    { id: 33, name: "Example Site", img: "https://r2.siteinspire.com/cdn-cgi/image/width=1920,height=1200,quality=75,format=auto,metadata=none,gravity=top,fit=crop,compress=true/screengrabs/images/000/017/455/original-f8bfd0aae0355551cf2920ddd79d1146.png?ar=16/10", colors: [1,5] },
    { id: 34, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44586628/file/e2fb5c7b165ad887226ba467c7613440.png?resize=1504x1128&vertical=center", colors: [1,5] },
    { id: 5, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/43798390/file/original-5335919818ac60482fb47903968d3761.png?resize=1600x1200&vertical=center", colors: [1,6,] },
    { id: 6, name: "Example Site ", img: "/sites/site1.png", colors: [2,3,] },
    { id: 7, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/13278904/file/original-d19c88be2e5bbfdd9e1a660727698dcb.png?resize=1504x1128&vertical=center", colors: [2,4] },
    { id: 8, name: "Example Site ", img: "https://cdn.dribbble.com/userupload/44889545/file/dfdad3cf08bba481000bfa0e30499cf1.png?resize=1504x1128&vertical=center", colors: [2,5,] },
    { id: 9, name: "Example Site ", img: "https://probilet.kz/photos/share/FAQ/604b3b7442543.jpg",colors: [2, 6,] },
    { id: 10, name: "Example Site", img: "https://cdn.dribbble.com/userupload/43036994/file/original-e1fe31aa8cd21c2088077dc07215525d.jpg?resize=1504x1128&vertical=center", colors: [3, 4,] },
    { id: 11, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44646329/file/871b40214a3178d922b07b9e076d737a.jpg?resize=1600x1200&vertical=center", colors: [3, 5,] },
    { id: 35, name: "Example Site", img: "https://cdn.dribbble.com/userupload/43823548/file/original-1979f81833b984e5f6bdebfaabbe7ccf.png?resize=1504x1128&vertical=center", colors: [3,5,] },
    { id: 12, name: "Example Site", img: "https://cdn.dribbble.com/userupload/2713565/file/original-2c1f02f1f3b25654aeecede13b24b276.png?resize=1600x1200&vertical=center", colors: [3, 6,] },
    { id: 13, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44268940/file/6fc6ef5ae71ea7281a99f5ca74d10921.png?resize=1504x1128&vertical=center", colors: [4, 5,] },
    { id: 14, name: "Example Site", img: "https://cdn.dribbble.com/userupload/9705117/file/original-a4fe98137a8200586fb3d56ea030d492.png?resize=1504x1128&vertical=center", colors: [4, 5,] },
    { id: 15, name: "Example Site", img: "https://cdn.dribbble.com/userupload/6142312/file/original-ed709f6c6f8ebd92b1c12be445c0b808.png?resize=1280x720&vertical=center", colors: [5, 6,] },


    { id: 16, name: "Example Site", img: "/sites/site1.png", colors: [1,2,] },
    { id: 17, name: "Example Site", img: "https://r2.siteinspire.com/cdn-cgi/image/width=1920,height=1200,quality=75,format=auto,metadata=none,gravity=top,fit=crop,compress=true/screengrabs/images/000/014/920/original.com?ar=16/10", colors: [1,6,] },
    { id: 18, name: "Example Site", img: "/sites/site3.png", colors: [1,4] },
    { id: 19, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44499799/file/7f0f1cf053051cbdc00412ba5a859de9.png?resize=1504x1124&vertical=center", colors: [3,6] },
    { id: 20, name: "Example Site", img: "https://cdn.dribbble.com/userupload/37249862/file/original-513bf24d718313d4278b1cf908cf84b4.png?resize=1024x783&vertical=center", colors: [1,6,] },
    { id: 21, name: "Example Site", img: "/sites/site1.png", colors: [2,3,] },
    { id: 22, name: "Example Site", img: "/sites/site1.png", colors: [2,4] },
    { id: 23, name: "Example Site", img: "https://cdn.dribbble.com/userupload/12137845/file/original-6bc07679a07d39311c5dba95745eb1d4.png?format=webp&resize=400x300&vertical=center", colors: [2,5,] },
    { id: 24, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44136181/file/original-958e296ebc23c25682b926d526da62fb.png?resize=1504x1128&vertical=center", colors: [2, 6,] },
    { id: 25, name: "Example Site", img: "https://cdn.dribbble.com/userupload/32079848/file/original-3c7231d10df4ace70f8fd800f0d903c2.png?resize=1504x1128&vertical=center", colors: [3, 4,] },
    { id: 26, name: "Example Site", img: "https://cdn.dribbble.com/userupload/43707636/file/original-7f854537d5c7760189216ef86db69cc5.jpg?resize=1024x745&vertical=center", colors: [3, 5,] },
    { id: 36, name: "Example Site", img: " https://cdn.dribbble.com/userupload/43894704/file/original-01c6096f276b2d618370c8c3ff86a7a0.png?resize=1504x1128&vertical=center", colors: [3, 6,] },
    { id: 27, name: "Example Site", img: "https://r2.siteinspire.com/cdn-cgi/image/width=1920,height=1200,quality=75,format=auto,metadata=none,gravity=top,fit=crop,compress=true/S40GJH8qb0-I.png?ar=16/10", colors: [5, 6,] },
    { id: 28, name: "Example Site", img: "https://cdn.dribbble.com/userupload/44384982/file/6ab2fb870df033c645b254bef4a1fd9a.png?resize=1200x900&vertical=center", colors: [4, 5,] },
    { id: 29, name: "Example Site", img: "https://cdn.dribbble.com/userupload/29997327/file/original-b44236f2401bd1af577d75116b6683f6.png?resize=1504x1128&vertical=center", colors: [4, 6,] },
    { id: 30, name: "Example Site", img: "https://r2.siteinspire.com/cdn-cgi/image/width=1920,height=1200,quality=75,format=auto,metadata=none,gravity=top,fit=crop,compress=true/screengrabs/images/000/017/782/original-15b27b5c0e910a0dbecf23319b45c120.png?ar=16/10", colors: [5, 6,] },
    { id: 37, name: "Example Site", img: "https://cdn.dribbble.com/userupload/17423508/file/original-777e8c72a68fa9fb6f95f34f16fc7a42.png?resize=1504x1128&vertical=center", colors: [2, 6,] },
    { id: 38, name: "Example Site", img: "https://cdn.dribbble.com/userupload/37196860/file/original-8ed9323834011a5b51cb8070aebd08ff.png?resize=1024x768&vertical=center", colors: [4, 6,] },


  // 3  
  ];

  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function contrastTextColor(hex) {
    const h = hex.replace("#", "");
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 160 ? "#000" : "#fff";
  }

  function toggleColor(id) {
    setShowSites(false);
    if (selectedColors.includes(id)) {
      setSelectedColors(selectedColors.filter((c) => c !== id));
    } else {
      if (selectedColors.length >= 2) {
        alert(
          (language === "kaz"
            ? "Тек 2 түсті таңдаған кезде ғана сайттар көрсетіледі. Қазір таңдағандар саны: "
            : language === "re"
            ? "Будут отображаться только те сайты, которые выбраны при выборе двух цветов. Количество выбранных на данный момент: "
            : "Only sites will be displayed when you select 2 colors. Number of currently selected: ") +
            selectedColors.length
        );
        return;
      }
      setSelectedColors([...selectedColors, id]);
    }
  }

  function handleClear() {
    setSelectedColors([]);
    setShowSites(false);
  }

  function handleRandom() {
    setShowSites(false);
    const available = colorsList.filter((c) => !selectedColors.includes(c.id));
    if (available.length === 0) {
      alert("Қолда бар барлық түстер таңдалған.");
      return;
    }
    const pick = available[Math.floor(Math.random() * available.length)];
    if (selectedColors.length >= 2) {
      alert(
        language == "kaz"
          ? "Тек 2 түсті таңдауға болады!"
          : language == "re"
          ? "Только 2 цвета на выбор!"
          : language == "en"
          ? "Only 2 colors to choose from!"
          : ""
      );
      return;
    }
    setSelectedColors((prev) => [...prev, pick.id]);
  }

  function handleSearch() {
    if (selectedColors.length !== 2) {
      alert(
        (language == "kaz"
          ? "Тек 2 түсті таңдаған кезде ғана сайттар көрсетіледі. Қазір таңдағандар саны:"
          : language == "re"
          ? "Будут отображаться только те сайты, которые выбраны при выборе двух цветов. Количество выбранных на данный момент:"
          : language == "en"
          ? "Only sites will be displayed when you select 2 colors. Number of currently selected:"
          : "") + selectedColors.length
      );
      return;
    }
    setShowSites(true);
  }

  const filteredSites =
    selectedColors.length === 2
      ? websites.filter((site) =>
          selectedColors.every((c) => site.colors.includes(c))
        )
      : [];

  return (
    <div className={`color ${theme}`}>
      <h1>Color List</h1>

      <div className="top-buttons">
        <button onClick={handleClear} className="btn">
          {language == "kaz"
            ? "Тазарту  "
            : language == "re"
            ? "Очистка"
            : language == "en"
            ? " Purification"
            : ""}
          <FaTrash className="icons" />
        </button>
        <button onClick={handleRandom} className="btn">
          {language == "kaz"
            ? "Кездейсоқ түс"
            : language == "re"
            ? "Случайный цвет"
            : language == "en"
            ? "Random color"
            : ""}{" "}
          <FaDice className="icons" />{" "}
        </button>

        <div className="search-block">
          <div className="counter">{selectedColors.length}/2 </div>
          <button onClick={handleSearch} className="btn search-btn">
            <FaSearch className="icons" />
          </button>
        </div>
      </div>

      <div className="boxcolor">
        {colorsList.map((color) => (
          <div
            key={color.id}
            onClick={() => toggleColor(color.id)}
            className={`boxcolor1 ${
              selectedColors.includes(color.id) ? "active" : ""
            }`}
            style={{
              background: color.hex,
              color: contrastTextColor(color.hex),
            }}
            title={`${color.name} — ${color.hex}`}
          >
            <div className="color-text">
              <div className="color-name">{color.name}</div>
              <div className="color-hex">{color.hex}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="selected-colors">
        <h3>
          {language == "kaz"
            ? "Таңдалған түстер  "
            : language == "re"
            ? " Выбранные цвета"
            : language == "en"
            ? "Selected colors"
            : ""}
        </h3>
        <div className="selected-list">
          {selectedColors.length === 0 && (
            <div>
              {language == "kaz"
                ? "Таңдалған жоқ"
                : language == "re"
                ? "Не выбрано"
                : language == "en"
                ? "Not selected"
                : ""}
            </div>
          )}
          {selectedColors.map((id) => {
            const c = colorsList.find((x) => x.id === id);
            return (
              <div key={id} className="selected-item">
                <div
                  className="selected-preview"
                  style={{ background: c.hex }}
                />
                <div className="selected-info">
                  <div>
                    <b>{c.name}</b>
                  </div>
                  <div>{c.hex}</div>
                  <div className="rgb">{hexToRgb(c.hex)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      {showSites && (
        <div className="sites-section">
          <h3>
            {language == "kaz"
              ? "Табылған сайттар"
              : language == "re"
              ? "Сайты найдены"
              : language == "en"
              ? "Sites found"
              : ""}{" "}
            ({filteredSites.length})
          </h3>
          {filteredSites.length > 0 ? (
            <div className="sites-list">
              {filteredSites.map((site) => (
                <div key={site.id} className="site-card">
                  <div className="site-img-box">
                    <img
                      onClick={() => setSelectedSite(site)}
                      src={site.img}
                      alt={site.name}
                      className="site-img"
                    />
                  </div>
                  <div className="site-info">{site.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Бұл 2 түске сай келетін сайт табылмады.</div>
          )}
        </div>
      )}

      {selectedSite && (
        <div className="modal" onClick={() => setSelectedSite(null)}>
          <img
            src={selectedSite.img}
            alt={selectedSite.name}
            className="modal-img"
          />
        </div>
      )}
    </div>
  );
}

export default Color;
