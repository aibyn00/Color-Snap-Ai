import React, { useState } from "react";
import './App.css'
import { CiSearch } from "react-icons/ci";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaEarthAmericas,FaCirclePlus } from "react-icons/fa6";
import { FaCheckCircle, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import SwiperOnly from './SwiperOnly';
import { Link } from "react-router-dom";

import { ImRoad } from "react-icons/im";

import CitySelect from "./CitySelect";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import World from "./World";
import Extras from "./Extras";
import Online from "./Online";
import Navigation from "./Navigation";
import Tizim from "./Tizim";


function App(){
    // const[clas ,setClas] = useState('bilet')

    
    const [regiter,setRegiter]  = useState('first')
    function register(){
        setRegiter('second')
    }


     const[clas ,setClas] = useState('bilet')
        function bilet(){
            setClas('bilet')
        }
        function letai(){
            setClas('letai')
        }
        function bagaj(){
            setClas('bagaj')
        }
        function online(){
            setClas('online')
        }


    const[language, setLanguage] = useState('rus')
    const languages = {
  rus: [
    { value: "rus", label: "Руский" },
    { value: "eng", label: "English" },
    { value: "kaz", label: "Казахский" },
  ],
  kaz: [
    { value: "kaz", label: "Қазақша" },
    { value: "rus", label: "Орысша" },
    { value: "eng", label: "English" },
  ],
  eng: [
    { value: "eng", label: "English" },
    { value: "kaz", label: "Kazakh" },
    { value: "rus", label: "Russian" },
  ],
};
    function bilet(){
        setClas('bilet')
    }
    function letai(){
        setClas('letai')
    }
    function bagaj(){
        setClas('bagaj')
    }
    function online(){
        setClas('online')
    }

    

    return(
        <div>
            <div className="navigation">
                <img src="https://flyarystan.com/Assets/img/logo-new.png"/>
                <Link style={{
                    marginRight:'0px'
                }}>Бронирование и управление</Link>     
                <Link style={{
                    marginLeft:'40px'
                }}>Информация</Link>  
                {/* <button><a href=""  > <Link to='/Help'>Помощь<Link/></a></button> */}
                <Link  style={{
                    marginLeft:'40px'
                }} to={'/Help'}> Помощь</Link>

                <div className="input">
                <input type="text"/>
                <button><CiSearch  className="search"/></button>

                
                </div>
                

            <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                {languages[language].map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option> ))}
            </select>

                    <button style={{
                        marginLeft:'40px',
                        border:'1px solid black'
                    }}onClick={register}> <Link to='./Regiter1' >Тіркелу</Link> </button>
                
                
            </div>
            <div style={{ maxWidth: '100%', margin: '0 auto', }} className="swiper">
                 <SwiperOnly />

            </div>
            <div>
                <div className="inputs1">
            
            <button  onClick={bilet} style={{width:'140px',
                height:'auto',
                textDecoration:'none',
                color:clas=='bilet'?'red' :'',
                fontSize:'15px',
                fontFamily:'sans-serif'
            }} className={clas=='bilet' ? 'activ' :'btns'}>
                <PiAirplaneTiltFill style=    {{color:clas=='bilet'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }} /> Билет
            </button>
            <button onClick={letai}  style={{width:'230px',
                 textDecoration:'none',
                color:clas=='letai'?'red' :'',
                fontSize:'15px',
                fontFamily:'sans-serif'
            }} className={clas=='letai' ? 'activ' :'btns'}>
                <FaEarthAmericas style={{color:clas=='letai'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }}/>   Летай по миру</button>
            <button onClick={bagaj}  style={{width:'230px',
                 textDecoration:'none',
                color:clas=='bagaj'?'red' :'',
                fontSize:'15px',
                fontFamily:'sans-serif'
            }} className={clas=='bagaj' ? 'activ' :'btns'}>
                  Багаж,место,питание</button>
            <button onClick={online}  style={{width:'230px',
                 textDecoration:'none',
                color:clas=='online'?'red' :'',
                fontSize:'15px',
                fontFamily:'sans-serif'
            }} className={clas=='online' ? 'activ' :'btns'}>
                <FaCheckCircle  style={{color:clas=='online'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }}/> Онлайн-регистрация</button>
                            
                         
            
        </div>
                {/* <button onClick={bilet} style={{width:'130px'}} className={clas=='bilet' ? 'activ' :'btns'}><PiAirplaneTiltFill />Билет</button>
                <button onClick={letai}  style={{width:'250px'}} className={clas=='letai' ? 'activ' :'btns'}><FaEarthAmericas />Летай по миру</button>
                <button onClick={bagaj}  style={{width:'250px'}} className={clas=='bagaj' ? 'activ' :'btns'}><FaCirclePlus />Багаж,место,питание</button>
                <button onClick={online}  style={{width:'250px'}} className={clas=='online' ? 'activ' :'btns'}><FaCheckCircle />Онлайн-регистрация</button>
                 */}
                 
                <div >
                   
                        {/* <Navigation/>  */}
                        <div className="inputs" style={{
                    display:'flex',
                    

                   
                }}>
                    {clas=='bilet'?
                    <div>
                        <CitySelect/>
                    </div>
                    :clas=='letai'?
                    <div>
                        <World/>
                         {/* <div style={{
            backgroundColor:'white',
            width:'100%',
            height:'100%',
            borderRadius:'0px 10px 10px 10px',
            textAlign:'center'
        }}>
            <h1>Бұл бет уақытша өшірулі !</h1>
            
        </div> */}
                    </div>
                    :clas=='bagaj'?
                    <div>
                        <Extras/>
                    </div>
                    :clas=='online'?
                    <div>
                        <Online/>
                    </div>:''}
                        {/* <Routes>
                            <Route  path="/" element={<CitySelect/>}></Route>
                            <Route path="/World" element={<World/>}></Route>
                            <Route path="/Extras" element={<Extras/>}></Route>
                            <Route path="/Online" element={<Online/>}></Route>
                        </Routes> */}
                        </div>
                </div>
            </div>
            <div className="blogpost">
                <div className="blog1" >
                    <div className="blog">
                        <div style={{
                            paddingTop:'20px',
                            paddingLeft:'20px'
                        }}>
                        <a href="https://flyarystan.com/extra-baggage?_gl=1*1g27jvu*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw#">
                        Экономте до 70% при покупке багажа онлайн ⟩</a>
                        <p>Входит в пакеты Комфорт и Комфорт +</p>
                        </div>
                        <img src="https://flyarystan.com/media/vwubkdpu/%D0%B1%D0%B0%D0%B3%D0%B0%D0%B6.jpg" alt="" />
                    </div>
                    <div className="blog">
                        <div style={{
                            paddingTop:'20px',
                            paddingLeft:'20px'
                        }}>
                        <a href="https://flyarystan.com/check-in-and-boarding-deadlines?_gl=1*19rdrvh*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw#">
                        Летите впервые? ⟩</a>
                        <p>Ознакомьтесь с правилами регистрации и посалки до полета</p>
                        </div>
                        <img src="https://flyarystan.com/media/q4oju1bf/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%BF%D0%BE%D1%81%D0%B0%D0%B4%D0%BA%D0%B8-1.jpg" alt="" />
                    </div>
                    <div className="blog">
                        <div style={{
                            paddingTop:'20px',
                            paddingLeft:'20px'
                        }}>
                        <a href="https://flyarystan.com/promo/ozgert?_gl=1*1cblxgw*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw#">
                        Дата вашей поездки могут измениться? ⟩</a>
                        <p>Вспользуйтесь услугой Озгерт</p>
                        </div>
                        <img src="https://flyarystan.com/media/gk4fp4ut/%D0%BE%D0%B7%D0%B3%D0%B5%D1%80%D1%82.jpg" alt="" />
                    </div>
                </div>
                <div className="blogpost2">
                    <div className="blog2">
                        <h1>Время новых приключений</h1>
                        <a href="">Наши направления ⟩</a>

                    </div>
                    <div className="blog2">
                        <img src="https://flyarystan.com/media/fsglstvz/ist_267x167_.jpg" alt="" />
                        <h4>от 36 000 ₸</h4>
                        <a href="https://flyarystan.com/directions/aktau/aktau-istanbul?_gl=1*nmil42*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw">
                        "Перекрёсток миров" ⟩
                        </a>
                    </div>
                    <div className="blog2">
                        <img src="https://flyarystan.com/media/utlihs1i/tas_.jpg" alt="" />
                        <h4>от 33 000 ₸</h4>
                        <a href="https://flyarystan.com/directions/astana/astana-tashkent?_gl=1*yr6dfd*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw">
                        "Столица дружбы" ⟩
                        </a>
                    </div>
                    <div className="blog2">
                        <img src="https://flyarystan.com/media/hdknv5bv/ukk_katon-karagai_.jpg" alt="" />
                        <h4>от 8 150 ₸</h4>
                        <a href="https://flyarystan.com/countries/kazakhstan/oskemen?_gl=1*yr6dfd*_up*MQ..*_ga*MTk1ODI5OTAzMi4xNzU0NDY1NTc1*_ga_FYLXGW40XL*czE3NTQ0NjU1NzQkbzEkZzAkdDE3NTQ0NjU1NzQkajYwJGwwJGgw*_ga_75PYZFVBX6*czE3NTQ0NjU1NzUkbzEkZzAkdDE3NTQ0NjU1NzUkajYwJGwwJGgw">
                        "Объятия Алтая" ⟩
                        </a>
                    </div>
                </div>
                <div className="blogpost3">
                    <div className="blog3">
                        <h2>Подпишитесь на <br /> рассылки</h2>
                        <h4>и узнавайте первыми о новых маршрутах и специальных предложениях.</h4>
                        <div style={{
                            display:'flex'
                        }}>
                            <input type="text" />
                            <input type="text" />

                        </div>
                            <div style={{
                                display:'flex'
                            }}>
                                <h3>Нажимая на кнопку «Подписаться», вы соглашаетесь на обработку ваших  <a href="https://flyarystan.com/privacy-policy">
                                    персональных данных.</a></h3>
                                    <button>Подписаться</button>
                            </div>
                    </div>
                    <div style={{display:'flex'}} className="blog4">
                        <div style={{
                            fontSize:'18px'
                        }}>
                        <h2>Мобильное приложение</h2>
                        <h4 style={{
                            fontSize:'16px',
                            fontWeight:'normal'
                        }}>Бронируйте билеты быстро и легко с приложением FlyArystan</h4>
                        <h5 style={{
                            marginTop:'170px',
                            marginLeft:'40px',
                            fontWeight:"normal"
                        }}>Для скачивания наведите камеру смартфона на QR-код</h5></div>
                        <img src="https://flyarystan.com/media/ojymtocj/mobile.webp" alt="" />
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="footer1" >
                    <div className="boxx">
                        <h2>Наши направление</h2>
                        <a href="">Алматы - Инин (Кульджа)</a>   
                        <a href="">Алматы - Тамчы (Иссык-Куль)</a>
                        <a href="">Караганда - Стамбул</a>  
                        <a href="">Атырау - Ташкент</a> 
                        <a href="">Все направления</a>  
                    </div>
                    <div className="boxx">
                        <h2>Города</h2>
                        <a href="">Инин (Кульджа)</a>  
                        <a href="">Тамчы (Иссык-Куль)</a>  
                        <a href="">Стамбул</a>  
                        <a href="">Ташкент</a>  
                        <a href="">Все города</a>
                    </div>
                    <div className="boxx">
                        <h2>Свяжитесь с нами</h2>  
                        <a href="">О нас</a>  
                    </div>
                    <div className="boxx" style={{
                        marginLeft:'170px'
                    }}>
                        <h1>Присоединяйтесь к нам:</h1>  
                        <div style={{
                            display:'flex',
                            gap:'20px',
                            marginLeft:'90px',
                            marginBottom:'40px'
                        }}>
                            <button><FaFacebook/></button>
                            <button><FaInstagram/></button>
                            <button><FaYoutube/></button>
                        </div>
                        <div className="imgdivs">
                            <img src="https://flyarystan.com/media/uknfs42a/footer-apps_apple.png" alt="" />
                            <img src="https://flyarystan.com/media/iyucoff4/button.png" alt="" />
                        </div>
                    </div>
                </div>  <hr />
                <div className="end">
                        <div className="end1">
                            <h3>Copyright FlyArystan. Все права защищены.</h3>  
                            <a href="">Правила и условия</a>  
                            <a href="">Политика конфиденциальности</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default App