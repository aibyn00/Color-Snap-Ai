import React, { useState, useContext, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Login.css";
import ThemeContext from "./ThemeContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [page, setPage] = useState("first");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const { language, user, setUser } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

const { setIsAc } = useContext(ThemeContext);

const handleLogin = (e) => {
  e.preventDefault();
  if (password === password1) {
    setIsAc(true);
    navigate("/colorai"); 
  } else {
    alert("Қате логин немесе пароль!");
  }
};
  



  const API_URL = "https://68848e23745306380a389d2e.mockapi.io/order/a1/users";
 async function register() {
    if (!name.trim() || !email.trim() || !password.trim() || !password1.trim()) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email дұрыс емес!");
      return;
    }

    if (password.length < 6) {
      alert("Құпия сөз кем дегенде 6 символ болуы керек!");
      return;
    }

    if (password !== password1) {
      alert("Құпия сөздер сәйкес келмейді!");
      return;
    }

    const info = {
      name,
      email,
      password,
      history: [],
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Сәтті тіркелді!");
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setPage("three");
        setIsAc(true);        
        // navigate("/colorai");
      } else {
        alert("Қате: " + (data.message || "Тіркеу мүмкін болмады"));
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Қате болды, консольды қарап көр");
    }
  }

  async function loginUser() {
    try {
      const res = await fetch(
        `${API_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      );
      const data = await res.json();

      if (res.ok && data.length > 0) {
        setUser(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0])); 
        setPage("three");
        setIsAc(true);       
        localStorage.setItem("isAc", "true");
      } else {
        alert("Email немесе құпия сөз қате!");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Қате болды, консольды қарап көр");
    }
  }

  async function addToHistory(item) {
    if (!user) return;

    const newHistory = [...(user.history || []), item];

    try {
      const res = await fetch(`${API_URL}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: newHistory }),
      });
      const updated = await res.json();

      if (res.ok) {
        setUser(updated);
        localStorage.setItem("user", JSON.stringify(updated));
      } else {
        alert("Қате: " + (updated.message || "History жаңарту мүмкін болмады"));
      }
    } catch (err) {
      console.error("Update history error:", err);
    }
  }
  function logout() {
  setUser(null);
  setIsAc(false);
  localStorage.removeItem("user");
  localStorage.removeItem("isAc"); 
  setPage("first");
}
useEffect(() => {
  const savedUser = localStorage.getItem("user");
  const savedIsAc = localStorage.getItem("isAc");

  if (savedUser) {
    setUser(JSON.parse(savedUser));
    setPage("three");
  }
  if (savedIsAc === "true") {
    setIsAc(true);
  }
}, []);
  return (
    <div className={` login ${theme}`}>
      <div className="login-wrapper">
      <div className="login1">
        <DotLottieReact
          className="loginlotie"
          src="https://lottie.host/764d302c-e79d-4af9-8e4f-69120262c9e5/CT5nh7gPMk.lottie"
          loop
          autoplay
        />
      </div>
      <div className="login2">
        {page === "first" && (
          <div className="reg">
            <input
              className="input"
              placeholder={
                language == "kaz"
                  ? "Атыңыз"
                  : language == "re"
                  ? "Имя"
                  : language == "en"
                  ? "Name"
                  : ""
              }
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="mail@site.com"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              placeholder={
                language == "kaz"
                  ? "Құпия сөз"
                  : language == "re"
                  ? "Пароль"
                  : language == "en"
                  ? "Password"
                  : ""
              }
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="input"
              placeholder={
                language == "kaz"
                  ? "Құпия сөзді растаңыз"
                  : language == "re"
                  ? "Подтвердите пароль"
                  : language == "en"
                  ? "Confirm password"
                  : ""
              }
              type="password"
              onKeyDown={(e)=> e.key==="Enter" && register()}
              onChange={(e) => setPassword1(e.target.value)}
              required
              onSubmit={handleLogin}
            />
              <div style={{display:'flex',marginLeft:'auto'}}>
                    <button className="button" onClick={register}>
                      <div  className="button-outer">
                        <div className="button-inner" onSubmit={handleLogin}>
                          <span style={{
                                fontSize:'18px',
                                fontWeight:'bold'
                                }}>{language == "kaz"
                                      ? "Тіркелу"
                                      : language == "re"
                                      ? "Регистрация"
                                      : language == "en"
                                      ? "Registration"
                                      : ""}
                          </span>
                        </div>
                      </div>
                    </button>
                     <button className="button" onSubmit={handleLogin} onClick={() => setPage("second")}>
                      <div  className="button-outer">
                        <div className="button-inner">
                          <span style={{
                                fontSize:'18px',
                                fontWeight:'bold'
                                }}>{language == "kaz"
                ? "Тіркелгенсіз бе?"
                : language == "re"
                ? "Вы зарегистрированы?"
                : language == "en"
                ? "Are you registered?"
                : ""}
                          </span>
                        </div>
                      </div>
                    </button></div>

{/* 
            <button onClick={register}>
              {language == "kaz"
                ? "Тіркелу"
                : language == "re"
                ? "Регистрация"
                : language == "en"
                ? "Registration"
                : ""}
            </button>
            <button onClick={() => setPage("second")}>
              {language == "kaz"
                ? "Тіркелгенсіз бе?"
                : language == "re"
                ? "Вы зарегистрированы?"
                : language == "en"
                ? "Are you registered?"
                : ""}
            </button> */}
          </div>
        )}

        {page === "second" && (
          <div className="reg1">
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input onSubmit={handleLogin}
              className="input"
              onKeyDown={(e)=> e.key==="Enter" && loginUser()}
              type="password"
              placeholder={
                language == "kaz"
                  ? "Құпия сөз"
                  : language == "re"
                  ? "Пароль"
                  : language == "en"
                  ? "Password"
                  : ""
              }
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button"  onClick={loginUser}>
                      <div  className="button-outer">
                        <div className="button-inner">
                          <span style={{
                                fontSize:'18px',
                                fontWeight:'bold'
                                }}>{language == "kaz"? "Кіру": language == "re" ? "Входить": language == "en"? "Enter": ""}
                          </span>
                        </div>
                      </div>
                    </button>
          
          </div>
        )}

        {page === "three" && user && (
          <div className="profile">
            <h1>
              {language == "kaz"
                ? "Профиль"
                : language == "re"
                ? "Профиль"
                : language == "en"
                ? "Profile"
                : ""}
            </h1>
            <p>
              {language == "kaz"
                ? "Аты:"
                : language == "re"
                ? "Имя:"
                : language == "en"
                ? "Name:"
                : ""}{" "}
              {user.name}
            </p>
            <p>{user.email}</p>
                 <button className="button"  onClick={logout}>
                      <div  className="button-outer">
                        <div className="button-inner">
                          <span style={{
                                fontSize:'18px',
                                fontWeight:'bold'
                                }}>{language == "kaz"
                ? "Шығу"
                : language == "re"
                ? "Выйти"
                : language == "en"
                ? "Logout"
                : ""}
                          </span>
                        </div>
                      </div>
                    </button>
          
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Login;
