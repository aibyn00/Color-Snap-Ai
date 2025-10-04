import React, { use, useEffect, useState } from "react";
import './Movie.css'


function App(){

    const[filmadd, setFilmadd] = useState(false)
    const[one, setOne] = useState(false)
    const[two, setTwo] = useState(false)
    const[tree, setTree] =useState(false)

    const[basty, setBasty] = useState('first')
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [janr, setJanr] = useState('');
    const [avtor, setAvtor] = useState('');
    const [bastyRol, setBastyRol] = useState('');
    const [kosmsha, setKosmsha] = useState('');
    const [img, setImg] = useState('');

function kosy() {
    const film1 = {


        name: name,
        age: age,
        janr: janr,
        avtor: avtor,
        basty_rol: bastyRol,
        kosmsha: kosmsha,
        img: img
    };

    
    const oldFilms = JSON.parse(localStorage.getItem('films')) || [];
    const newFilms = [...oldFilms, film1];
    localStorage.setItem('films', JSON.stringify(newFilms));

    setFilmadd(true)

    setBasty('first');
    setName('');
    setAge('');
    setJanr('');
    setAvtor('');
    setBastyRol('');
    setKosmsha('');
    setImg('');
}
function artka(){
    setBasty('first')
    
    setOne(true)

}
function filmplus(){
    setBasty('adde')
    setTwo(true)
}
function filmtizim(){
    setBasty('list')
    setTree(true)
}

const films = JSON.parse(localStorage.getItem('films')) || [];
    useEffect(()=>{
        alert('film kosyldi')
        setFilmadd(false)
    } , [filmadd] )

    useEffect(()=>{
        alert('сіз басты бетке өттіңіз')
        setOne(false)
    } , [one] )
    useEffect(()=>{
        alert('фильм қосатын бет')
        setTwo(false)
    } , [two])
    useEffect(()=>{
        alert('фильмдер  тізімі')
        setTree(false)
    },[tree])
    return(

        
        <div className="div1"> 
        {basty=='first' ?<div className="basty">
                <h1>Movies</h1>
                <button className="kos" onClick={filmplus}>➕  фильм қосу</button>
                <button className="spi" onClick={filmtizim}>🗒️  фильмдер тізімі</button>

                </div> : basty=='adde' ? 
                 <div className="kosy">
                    <label>Фильм аты</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />

                    <label>Шыққан жылы</label><br />
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /><br />

                    <label>Жанры</label><br />
                    <input type="text" value={janr} onChange={(e) => setJanr(e.target.value)} /><br />

                    <label>Авторы</label><br />
                    <input type="text" value={avtor} onChange={(e) => setAvtor(e.target.value)} /><br />

                    <label>Басты рөл</label><br />
                    <input type="text" value={bastyRol} onChange={(e) => setBastyRol(e.target.value)} /><br />

                    <label>Қосымша ақпарат</label><br />
                    <input type="text" value={kosmsha} onChange={(e) => setKosmsha(e.target.value)} /><br />

                    <label>Сурет сілтемесі</label><br />
                    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} /><br />

                    <button className="plus" onClick={kosy}>Фильмді қосу</button>
                    <button className="naz" onClick={artka}>артқа</button>
                </div>: basty=='list' ?<div className="tizim">
                    <div className="btn"><button onClick={artka} className="naz">артқа</button></div>

                {films.length > 0 ? (
                    films.map((film, index) => (
                        <div key={index} className="film-card">
                             <img src={film.img} alt="Фильм суреті"  />
                            <p> <span style={{
                                fontWeight:'bold'
                            }}> {film.name}</span></p>
                            <p>Шыққан жылы: <span>{film.age}</span></p>
                            <p>Жанры: <span>{film.janr}</span></p>
                            <p>Авторы: <span>{film.avtor}</span></p>
                            <p>Басты рөл: <span>{film.basty_rol}</span></p>
                            <p>Қосымша: <span>{film.kosmsha}</span></p>
                            
                           
                            
                        </div>
                ))
) : <p>Фильм табылмады</p>}
                
            </div>:''}
            

           

            

        </div>
    )}

export default App;  