import importIcon from "./assets/icons/import.svg";
import favIcon from "./assets/icons/favorite-black.svg";
import trashIcon from "./assets/icons/trash.svg";
import "./App.css";
import musics1000 from "./musics-1000";
import musics5000 from "./musics-5000";
import musics10000 from "./musics-10000";
import MusicCard from "./music-card/MusicCard";
import { useState } from "react";

const getMusics = (musics: string[]): { name: string; favorite: boolean }[] => {
  return musics.map((m) => ({
    name: m,
    favorite: false,
  }));
};

const App = () => {
  const [musics, setMusics] = useState<{ name: string; favorite: boolean }[]>(
    []
  );

  const _musics1000 = getMusics(musics1000);
  const _musics5000 = getMusics(musics5000);
  const _musics10000 = getMusics(musics10000);

  const removeAllMusics = (): void => {
    setMusics([]);
  };

  const favoriteAllMusics = (): void => {
    setMusics(musics.map((m) => ({ ...m, favorite: true })));
  };

  const import1000Musics = (): void => {
    setMusics([...musics, ..._musics1000]);
  };
  const import5000Musics = (): void => {
    setMusics([...musics, ..._musics5000]);
  };
  const import10000Musics = (): void => {
    setMusics([...musics, ..._musics10000]);
  };

  return (
    <main className="page">
      <header>
        <h1>Músicas escutadas 🎵</h1>
        <section className="actions">
          <div className="action-btn" onClick={() => import1000Musics()}>
            Importar últimas 1.000 músicas escutadas
            <img
              src={importIcon}
              alt="Import icon"
              className="action-btn-icon"
            />
          </div>
          <div className="action-btn" onClick={() => import5000Musics()}>
            Importar últimas 5.000 músicas escutadas
            <img
              src={importIcon}
              alt="Import icon"
              className="action-btn-icon"
            />
          </div>
          <div className="action-btn" onClick={() => import10000Musics()}>
            Importar últimas 10.000 músicas escutadas
            <img
              src={importIcon}
              alt="Import icon"
              className="action-btn-icon"
            />
          </div>
          <div className="action-btn" onClick={() => favoriteAllMusics()}>
            Favoritar todas as músicas
            <img
              src={favIcon}
              alt="Favorite icon"
              className="action-btn-icon"
            />
          </div>
          <div
            className="action-btn remove-action"
            onClick={() => removeAllMusics()}
          >
            Remover todas músicas
            <img src={trashIcon} alt="Trash icon" className="action-btn-icon" />
          </div>
        </section>
      </header>

      <section className="grid">
        {musics.map((m, index) => (
          <MusicCard key={index} name={m.name} favorite={m.favorite} />
        ))}
      </section>
    </main>
  );
}

export default App;
