import axios from "axios";
import { useState } from "react";
import './Admin.css';
import ClientView from './ClientView';

function App() {
  const [food, setFood] = useState('');
  const [souse, setSouse] = useState('');
  const [drink, setDrink] = useState('');
  const [price, setPrice] = useState('');
  const [accepted, setAccepted] = useState(false);

    
  const send = () => {
    

    const newOrder = {
      food,
      souse,
      drink,
      accepted: true,
      price:0
    };

    axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/orders', newOrder)
      .then(res => {
        alert("Тапсырыс жіберілді, күте тұрыңыз", res.data);
        setPrice(price);
        setAccepted(false);
      })
      
  };

  return (
    <div className="admin">
        <img src="https://lotosplazaptz.ru/upload/iblock/0fa/ctk6ak3qnf6l1fzwhuvyeddi0zmxftno.png" alt="" className="logo"/>
      <h2>Заказ панель</h2>
      <div className="body">
      <div className="imgd">
      <img className="img" src="https://vkusnotochkamenu.ru/image/cache/catalog/photo/115939790-big-chiken-burger-600x600.png" alt="" />
      <input type="text" placeholder="Food" onChange={(e) => setFood(e.target.value)} /></div>
      <div className="imgd">
      <img className="img" src="https://produktoff.kz/pictures/product/big/25905_big.png" alt="" />
      <input type="text" placeholder="Drink" onChange={(e) => setDrink(e.target.value)} /></div>
      <div className="imgd">
      <img className="img" src="https://menu2go.ru/images/food/393/393_576_20220405155808_6224.png" alt="" />
      <input type="text" placeholder="Souse" onChange={(e) => setSouse(e.target.value)} /></div>
      <button onClick={send}><img src="https://png.pngtree.com/png-vector/20231213/ourmid/pngtree-buy-now-button-with-shopping-cart-icon-vector-png-image_11262397.png" alt="" /></button>
</div>
      <div><ClientView />
      <button className="ccc" >бағасын көру</button></div>
    </div>
  );
}

export default App;
