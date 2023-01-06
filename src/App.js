import React, { useState } from "react";
import { Header } from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "./Components/pages";
import { DataProvider } from "./Components/context/Dataprovider";
import 'boxicons'
import './App.css'
import { ShoppingCart } from "./Components/ShoppingCart";

function App() {
  const [activeCar, setActiveCar] = useState(true);

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header
            activeCar={activeCar}
            setActiveCar={setActiveCar}
           />
          <ShoppingCart
            state={activeCar}
          />
          <Pages />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
