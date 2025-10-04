import React, { useState , useEffect  } from 'react';
import { FaRegClone, FaHome,FaMusic, FaRegQuestionCircle,FaChevronRight ,FaChevronLeft, FaSearch ,FaEllipsisH  } from 'react-icons/fa';
import { BiImport, BiSolidDice5, BiSolidPlusCircle } from "react-icons/bi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineDashboard , MdOutlinePushPin  } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import './Notes.css'



function App() {

    const[efect, setEfect] = useState('false')
    const[active, setActive] = useState('')
    const[baground , setBaground] = useState(false)
    const[img,setImg] = useState ('small')



    const now = new Date().toLocaleString();
    const[page,setPage] = useState('first')
    const[title, setTitle] = useState('')
    const[description,setDescription] = useState('')
    const[text, setText] = useState('')
    const[notes, setNotes] = useState([])

    const sortedNotes = [...notes].sort((a, b) => b.pinned - a.pinned);


    const[changeFont, setChangeFont] = useState('')
    const[color, setColor] = useState ('')

    function notess(){
        setPage('three')
        setActive('notes')
        setImg('small')
    }
    function tasks(){
        setActive('tasks')
        setPage('tasks')
        setImg('big')
    }
    function annous(){
        setActive('annous')
        setPage('annous')
        setImg('big')
    }
    function musics(){
        setActive('musics')
        setPage('music')
        setImg('big')
    }
    function quests(){
        setActive('quests')
        setPage('quests')
        setImg('big')
    }
    function dashs(){
        setActive('dashs')
        setPage('dashs')
        setImg('big')
    }
    function devs(){
        setActive('devs')
        setPage('devs')
        setImg('big')
    }
    function swifts(){
        setActive('swifts')
        setPage('first')
        setImg('big')
    }
    function pages(){
        setPage('second')
        setActive('page')
        setImg('big')
        
    }


    


    // function save(){
    //     // setNotes([...notes, {title:title, description:description, text:text, date:now, font:changeFont}])
    //     setPage('three')
    //     setActive('notes')
    //     const user2 = {
    //     title: title,
    //     description: description,
    //     text: text,
    //     date:now,
    //     font:changeFont
    // };
    // localStorage.setItem('user', JSON.stringify(user2));
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user) {
    //     document.getElementById("title").textContent = user.title;
        
    // }
    // }


       function save() {
        const newNote = {
        title: title,
        description: description,
        text: text,
        date: now,
        font: changeFont,
        color: color,
        bg: baground,
        isOpen: false,
        pinned: false
        };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setPage('three');
    setActive('notes');
    }


    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
        setNotes(savedNotes);
        }}, []);

    function toggleCopy(index) {
        const updated = [...notes];
        updated[index].isOpen = !updated[index].isOpen;
        setNotes(updated);
        localStorage.setItem('notes', JSON.stringify(updated)); 
    }
    function deleteNote(index) {
        if (!window.confirm("Өшіруді қалайсың ба?")) return;
        const updated = [...notes];
        updated.splice(index, 1); 
        setNotes(updated);
        localStorage.setItem('notes', JSON.stringify(updated));
        }
    function togglePin(index) {
        const updated = [...notes];
        updated[index].pinned = !updated[index].pinned;
        setNotes(updated);
        localStorage.setItem('notes', JSON.stringify(updated));
        }        









        return (
            <div className='body'>
                <div className='parametrs'>
                    <div className='iconselect'>
                    <div className='icon'>
                    <div className='black'></div>
                    <div className='orange'></div>
                    </div>
                    <select name="">
                        <option value="">Awsmd ↕</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select></div> <br />
                <div className='btns'>
                    <button> <FaRegClone /> Templates</button><br />
                    <button> <BiImport /> Import</button><br />
                    <button><FiTrash /> Trash</button><br />
                </div>


                    <p>WORKSPACE</p><br />
                    <button className={active==='notes'? 'active' : ''} onClick={notess}><FaRegNoteSticky /> Notes</button><br />
                    <button className={active==='tasks'? 'active' : ''} onClick={tasks}><MdOutlineDashboard /> Tasks</button><br />
                    <button className={active==='annous'? 'active' : ''} onClick={annous}><GrAnnounce /> Annoucements</button><br />
                    <button className={active==='musics'? 'active' : ''} onClick={musics}><FaMusic /> Music</button><br />
                    <button className={active==='quests'? 'active' : ''} onClick={quests}><FaRegQuestionCircle /> Questions</button><br />
                    <button className={active==='dashs'? 'active' : ''} onClick={dashs}><MdOutlineDashboard /> Dashboard</button><br />
                    <button className={active==='devs'? 'active' : ''} onClick={devs}><FaChevronLeft /><FaChevronRight />  Devlopment</button><br />
                    <button className={active==='swifts'? 'active' : ''} onClick={swifts}><MdOutlineDashboard />  Home</button><br />
                    <button style={{
                        marginTop:'200px'
                    }} onClick={pages} className={active==='page'?'active':''}><BiSolidPlusCircle /> New Page</button>

                </div>

                {page=='first'?
                <div style={{
                    width:'600px'
                }}>
                    
                     <h1> Басты бет</h1>
                </div>
                :page=='tasks'?
                <div style={{
                    width:'600px'
                }}>
                     <h1>Tasks беті</h1>
                </div >
                :page=='annous'?
                <div style={{
                    width:'600px'
                }}>
                    <h1>Annoucements беті</h1>
                </div>
                :page=='music'?
                <div style={{
                    width:'600px'
                }}>
                    <h1>Music беті</h1>
                </div>
                :page=='quests'?
                <div style={{
                    width:'600px'
                }}>
                    <h1>Questions беті</h1>
                </div >
                :page=='dashs'?
                <div style={{
                    width:'600px'
                }}>
                    <h1>Dashboard беті</h1>
                </div>
                :page=='devs'?
                <div style={{
                    width:'600px'
                }}>
                    <h1>Development беті</h1>
                </div>
                :page=='three'?
                <div>
                    <div className='head'>
                        <FaSearch className='search' />
                    <input type="text" placeholder='Search notes' /> 
                    <button className='headbtn'><MdOutlinePushPin /></button>
                    <button className='headbtn'><BiImport /></button>
                    <p>Updates</p>
                    <p>Share</p>
                    <div className='images'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="" />
                        <img src="https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo-thumbnail.png" alt="" />
                        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740" alt="" />
                    </div>
                    <p><FaEllipsisH /></p>
                </div>
                <div>
                    <h1>Notes</h1>
                    {sortedNotes.map((n, index) => (
  <div
    className='notes'
    key={index}
    style={{
      fontWeight: n.font === 'bold' ? 'bold' : 'normal',
      fontStyle: n.font === 'italic' ? 'italic' : 'normal',
      color: n.color,
       backgroundColor: n.pinned ? 'orange' : (n.bg ? 'orange' : 'rgb(238, 237, 237)'),
      height: n.isOpen ? 'auto' : 'auto'
    }}
  >
    {n.isOpen ? (
      <div>
         <label className='labelcheck'>
      <input type="checkbox" checked={n.pinned} onChange={() => togglePin(index)}/>{" "}
        </label>

        <h2>{n.title}</h2>
        <p>{n.description}</p>
        <p>{n.text}</p>
        <p>{n.date}</p>
        <button className='btnn' onClick={() => toggleCopy(index)}>жабу</button>
        <button  className='btnn'  onClick={() => deleteNote(index)}>өшіру</button>
      
      </div>
    ) : (
      <div>
         <label className='labelcheck'>
      <input type="checkbox" checked={n.pinned} onChange={() => togglePin(index)}/>{" "}
    </label>
        <h2>{n.title}</h2>
        <p>{n.description}</p>
        <p>{n.date}</p>
        <button className='btnn'  onClick={() => toggleCopy(index)}>ашу</button>
        <button  className='btnn'  onClick={() => deleteNote(index)}>өшіру</button>
        

      </div>
    )}
  </div>
))}

                </div>

                </div>:
                <div className='box'>
                    
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                }}> 
                <button onClick={()=>setPage('first')}>{`< All iCloud`}</button>
                <div className='notesbtn'>
                    <button><MdOutlinePushPin /></button>
                    <button><FaEllipsisH /></button>
                    <button onClick={save}>Done</button>
                </div>


                </div>
                {now}
                <div className='inputs'>
                <input  style={{
                    fontStyle: changeFont=='italic' ? 'italic ' : 'normal',
                    fontWeight: changeFont == 'bold' ? 'bold' : 'normal' ,
                    color:color
                }} type="text"  placeholder="title"  onChange={(e)=>{setTitle(e.target.value)}}/> <br />
                <input style={{
                    fontStyle: changeFont=='italic' ? 'italic ' : 'normal',
                    fontWeight: changeFont == 'bold' ? 'bold' : 'normal' ,
                    color:color
                }} type="text" placeholder="discription " onChange={(e)=>{setDescription(e.target.value)}} /> <br />
                <textarea name="" placeholder='text' onChange={(e)=>{setText(e.target.value)}}></textarea>
                <button onClick={()=>setChangeFont('italic')}>I</button>
                <button onClick={()=> setChangeFont('bold')}>B</button>

                 <input type="color" className='color' onChange={(e)=>setColor(e.target.value)}/>
                 </div>
                </div>}

                <div className={img=='small'?'small' : 'imgnotes'} >
                <img src="https://cdn6.aptoide.com/imgs/9/c/8/9c87089bcdbdb6c934d7a592f573aca3_icon.png" alt="" />
                </div>
                </div>
                
        );
    
}


export default App
