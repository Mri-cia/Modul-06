
import "./App.css";
import Panel from "./components/Panel";
import KartuMenu from "./components/KartuMenu"


function App() {
  const namaPanggilan = "Rawi";
  const N = 6;
  let jam = 9;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h1 className="judul" style={{ fontWeight: "bold", color: "blue" }}>
          Kantin {namaPanggilan}
        </h1>
        <p>Selamat {jam < 12 ? "Pagi" : "Siang"}</p>
        <p>Saldo awal waktu kantin: Rp{N * 1000}</p>
        <button disabled={true}>bayar</button>
      </div>
      <Panel judul={'Menu Hari ini'}>
        <div>
        <KartuMenu nama="Nasi Ayam Geprek" harga={13000}/>
        </div>
      </Panel>
    </>
  );
}

export default App;
