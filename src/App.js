import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import Counter from "./components/Counter";

function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    }
  ]
  return (
  <>
  <Navbar/>
  <main className='container mt-5'>
    <Counter />
  {/* <ProductList productList={productList}/> */}
  </main>
  </>
  );
}

export default App;

