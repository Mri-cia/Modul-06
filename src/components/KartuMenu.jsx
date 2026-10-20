import { useState } from "react";
import LabelHarga from "./LabelHarga";

export default function KartuMenu({nama, harga, kategori = "Makanan"}) {
    const [jumlah, setJumlah] = useState(0);

    const belumDipesan = () => {
        return jumlah <= 0;
    }

    const tambah = () => {
        setJumlah(jumlah+1)
    }

    const kurang = () => {
        setJumlah(jumlah-1)
    }

    const setDisabled = () => {
        return jumlah <= 0 ? true : false
    }

  return (
    <div>
    <h2>{nama}</h2>
    <p>{kategori}</p>
      <LabelHarga nilai={harga} />
      <div style={{display: "flex"}}>
        <button onClick={kurang} >-</button>
        <p>{jumlah}</p>
        <button onClick={tambah} disabled={setDisabled}>+</button>
      </div>
      <p>{belumDipesan ? 'Belum Dipesan' : `Subtotal Rp ${harga * jumlah}`}</p>
      {jumlah >= 5 && <p>Pesanan banyak</p>}
      <label htmlFor="">Catatan pesanan: </label>
      <input type="text" />
    </div>
    
  );
}
