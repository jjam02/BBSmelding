import { useState } from 'react'
import terra from './assets/terra.png'
import ventus from './assets/ventus.png'
import aqua from './assets/aqua.png'
import './App.css'

function App() {

  const [filter, setFilter] = useState<string>("");

  function updateFilter(event: React.MouseEvent<HTMLImageElement>): void {
    const char = Array.from(event.currentTarget.classList)[1];
    if (filter.includes(char)) {
      setFilter((prevFilter) => prevFilter.replace(char, ""));
    } else {
      setFilter((prevFilter) => prevFilter + char + "\n");

    }

  }

  function clearFilter(): void {
    setFilter((prevFilter) => "");
  }

  return (
    <>
      <div>

        <img onClick={updateFilter} src={terra} className="char Terra" alt="React logo" />
        <img onClick={updateFilter} src={ventus} className="char Ventus" alt="React logo" />
        <img onClick={updateFilter} src={aqua} className="char Aqua" alt="React logo" />
      </div>
      <button onClick={clearFilter}>Clear Filter</button>
      <h1>Melding BBS</h1>
      <div className="card">

        <p>
          Melding guide for Kingdom Hearts: Birth By Sleep Final Mix
        </p>
        <p>
          current filter: {filter}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
