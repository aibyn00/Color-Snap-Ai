import React, { useState,useContext } from "react";
import ThemeContext from "./ThemeContext";

// const { theme } = useContext(ThemeContext);
function DesignAi() {
  const [prompt, setPrompt] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
    const { language, setLanguage, ChangeTheme, user } = useContext(ThemeContext);

    const { theme,setTheme } = useContext(ThemeContext);
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    try {
      const resp = await fetch(
        `
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }]
              }
            ]
          })
        }
      );

      const data = await resp.json();
      console.log("API response:", data);

      if (data.candidates && data.candidates[0]) {
        setAdvice(data.candidates[0].content.parts[0].text);
      } else {
        setAdvice("❌ Жауап табылмады");
      }
    } catch (err) {
      console.error(err);
      setAdvice("⚠️ Қате: API-дан жауап келмеді");
    }

    setLoading(false);
  };

  return (
    <div  className={`design-ai ${theme}`}>
      <h2> AI Design Assistant</h2>
      

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder=
                  {language == "kaz"
            ? "Мысалы: логотипке арналған түс палитрасын ұсыныңыз  "
            : language == "re"
            ? "Например: предложите цветовую палитру для логотипа"
            : language == "en"
            ? " For example: suggest a color palette for the logo"
            : ""}
        rows={3}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {language === "kaz"
  ? (loading ? "Жүктелуде..." : "Генерациялау")
  : language === "re"
  ? (loading ? "Загрузка..." : "Генерация")
  : language === "en"
  ? (loading ? "Loading..." : "Generate")
  : ""}

       
      </button>

      {advice && (
        <div className="advice-box">
          <pre>{advice}</pre>
        </div>
      )}
    </div>
  );
}

export default DesignAi;
