
// import Hello from './Helloworld'
// function App() {

//   return (
    
//       <div>
//         <h1>Менің визит картам</h1>
//         <Hello name="Aibyn Nagashybai" age="Програмист" height="Almaty,KZ"/>
//       </div>

        
//   )
// }

// export default App



















// import Profil_card from './profil-card';
// function App(){
//    return (

//     <div >
//       <h1>My profile cards</h1>
//       <div className='card'>
//       <Profil_card imge="https://elev8now.co.uk/wp-content/uploads/2024/02/Atomic-Habits-by-James-Clear.jpg" name="Atomic Habits" abtor="Clear" date="2018"/>
//        <Profil_card imge="https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6741d05f26ff31bf5b485800_66f8462d3dbe7fb190a64ebf_667d739585fe42a4efa2e931_The-Psychology-of-Money-by-Morgan-Housel-on-Coffee-Table.jpeg" name="The psychology of Money" abtor="Morgan Housel" date="2020"/>
//         <Profil_card imge="https://images.squarespace-cdn.com/content/v1/62888c474203c0008b164382/5a1abfe9-b686-40b7-81b4-7c8de2de98dc/IMG_1658.jpeg" name="Deep Work" abtor="Cal Newport" date="2016"/>
//         </div>
//     </div>

//    )
// }

// export default App













// import Apple  from './Apple';
// function App (){
//    return (

//     <div >
//    <h1>Apple компаниясының танымал товарлары</h1>
//        <div className='card1'>
//        <Apple imges="https://resources.cdn-kaspi.kz/img/m/p/h1e/h26/87310434533406.jpg?format=gallery-medium" names="iPhone 16 pro" price="627 847 ₸" />
//        <Apple imges="https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-medium" names="iPad Pro" price="719 000 ₸" />
//        <Apple imges="https://resources.cdn-kaspi.kz/img/m/p/hbb/he3/87344947003422.jpg?format=gallery-medium" names=" Apple Watch Series 10" price="570 000 ₸" />
//        <Apple imges="https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium" names="Apple AirPods Max" price="395 995 ₸" />
//         </div>
//      </div>

//    )
// }

// export default App











import './App.css'


import Header   from "./Header";
import BlogPost from "./BlogPost";

import Navigition from "./Navigation";
import Footr from "./Footr";
import AuthorDetails from "./AuthorDetails";

function App(){
    return(
        <div>
            <Header ></Header>
            <Navigition></Navigition>
            <BlogPost blog='React-тың негіздері' post='react- бұл '></BlogPost>
            <BlogPost blog='Компонентер мен Props' post='компонентер бұл '></BlogPost>
            <AuthorDetails author='Нағашыбай Айбын' details='Айбын жақсы оқушы'></AuthorDetails>
            <Footr fot='     2023 Менің блогым. Барлық құқықтар сақталған.    ' ></Footr>
        </div>
    )
}
export default App