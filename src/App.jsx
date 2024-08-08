import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
