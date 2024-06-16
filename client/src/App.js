import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ChatWindow from "./pages/ChatWindow"
import Cart from "./pages/Cart";
import Main from "./ChatComponents/Main";
import Chat from "./ChatComponents/Chat";
import Register from "./pages/Register"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/products/:category", element: <ProductList /> },
      { path: "/products", element: <ProductList /> },      ,
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/chatWindow", element: <ChatWindow/> },
      {path: "/main", element: <Main />},
     {path: "/chat", element: <Chat />},
      { path: "/register", element: <Register /> },

  ];
  return (
      <BrowserRouter>
        <Routes>
          { routes.map((item, index) =>
              <Route key={index} path={item.path} element={item.element} /> )
          }
        </Routes>
      </BrowserRouter>

  )
}

export default App;
