import axios from "axios";
import { useEffect, useState } from "react";

function ClientView() {
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/orders')
      .then(res => {
        const allOrders = res.data;

        
        const latest = allOrders[allOrders.length - 1];
        setLastOrder(latest);
      })
      .catch(err => {
        console.error("Қате:", err);
      });
  }, []);

  return (
    <div style={{
        marginTop:'40px',
    }}>
      <h2>Менің тапсырысым</h2>
      {lastOrder ? (
        <div>
          <p><strong>Тағам:</strong> {lastOrder.food}</p>
          <p><strong>Сусын:</strong> {lastOrder.drink}</p>
          <p><strong>Соус:</strong> {lastOrder.souse}</p>
          <p><strong>Бағасы:</strong> {lastOrder.price} ₸</p>
        </div>
      ) : (
        <p>Жүктелуде...</p>
      )}
      
    </div>
  );
}

export default ClientView;
