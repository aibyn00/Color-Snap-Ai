import React, { useRef, useState, useContext } from "react";
import "./ColorAi.css";
import ThemeContext from "./ThemeContext";

function ColorAi() {
  const { language } = useContext(ThemeContext);
      const { theme } = useContext(ThemeContext);

  const [fixedColors, setFixedColors] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pickedColor, setPickedColor] = useState(null);
  const canvasRef = useRef(null);

  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Сурет таңдаңыз");

    const reader = new FileReader();
    reader.onload = (ev) => {
      setImageSrc(ev.target.result);
    };
    reader.readAsDataURL(file);
  }
  function rgbToHex(r, g, b) {
    const toHex = (n) => n.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = pixel;

    if (a > 0) {
      setPickedColor({
        rgb: `rgb(${r}, ${g}, ${b})`,
        hex: rgbToHex(r, g, b),
      });
    }
  }

  // 🔹 канвасқа басқанда түсті сақтау
  function handleCanvasClick() {
    if (pickedColor) {
      setFixedColors((prev) => [...prev, pickedColor]);
    }
  }

  // 🔹 сурет жүктелгенде canvas-қа салу
  function handleImageLoad(e) {
    const img = e.target;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }

  return (
    <div className={`colorai ${theme}`} style={{ padding: 20 }}>
      <div className={`colorboxx ${theme}`}>
      <h1 className="titleh1">
        {language === "kaz"
          ? "ColorAi — Суреттен түс алу"
          : language === "re"
          ? "ColorAi — получение цвета из изображения"
          : language === "en"
          ? "ColorAi — getting color from an image"
          : ""}
      </h1>

      <input type="file" accept="image/*" onChange={handleFile} />

      {imageSrc && (
        <div style={{ marginTop: 16 }}>
          <img
            src={imageSrc}
            alt="uploaded"
            style={{ maxWidth: "300px", borderRadius: 8, cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          />
        </div>
      )}

      {showModal && (
        <div
          className="modal"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="canvas"
            style={{
              background: "#fff",
              padding: 10,
              borderRadius: 8,
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <canvas
              ref={canvasRef}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                border: "1px solid #ccc",
                borderRadius: 8,
                cursor: "crosshair",
              }}
              onMouseMove={handleMouseMove}
              onClick={handleCanvasClick}
            />
            <img
              src={imageSrc}
              alt="hidden"
              style={{ display: "none" }}
              onLoad={handleImageLoad}
            />

            {/* 🔹 Таңдалған түстер */}
            {fixedColors.length > 0 && (
              <div
                className="fixed-colors"
                style={{
                  marginTop: 16,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {fixedColors.map((color, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1px solid #ccc",
                      borderRadius: 6,
                      padding: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        background: color.hex,
                        border: "1px solid #999",
                      }}
                    ></div>
                    <div>
                      <p style={{ margin: 0, fontSize: 13 }}>{color.hex}</p>
                      <p style={{ margin: 0, fontSize: 13 }}>{color.rgb}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 🔹 Ағымдағы түс */}
            {pickedColor && (
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    background: pickedColor.hex,
                  }}
                ></div>
                <p>{pickedColor.hex}</p>
                <p>{pickedColor.rgb}</p>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default ColorAi;
