//import { LoginForm } from './components/LoginForm'
import './App.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { MyRouters } from './routers/routes';
//import { RegisterForm } from './components/RegisterForm'
import { Card } from './components/Card'
//import { ProductList } from './data/ProductList'
import { ConfirmPurchase } from './components/ConfirmPurchasePage';

function App() {
  const products = [
    {
      id: 1,
      name: "Double Medium Hut",
      description: "2 medium pizzas",
      price: 19.99,
      image: "",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del Producto 2",
      price: 29.99,
      image: "",
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <>
      {/* <div>
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div> */}

        <ConfirmPurchase>

        </ConfirmPurchase>
    </>
  )
}

export default App
