import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const namaPanggilan = "Rawi";
  const N = 6;
  let jam = 9

  return (
    <>
      <div>
        <h1 className="judul" >Kantin {namaPanggilan}</h1>
        <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>
        <p>Saldo awal waktu kantin: Rp{N * 1000}</p>
        <button disabled={true}>bayar</button>
      </div>
    </>
  );
}

export default App;
