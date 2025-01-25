import { useState } from 'react'
import terra from './assets/terra.png'
import ventus from './assets/ventus.png'
import aqua from './assets/aqua.png'
import actions from './assets/actions.json'
import attacks from './assets/attacks.json'
import magic from './assets/magic.json'
import prizes from './assets/prizes.json'
import shotlock from './assets/shotlock.json'
import stats from './assets/stats.json'
import support from './assets/support.json'

import './App.css'

function App() {

  const [charFilter, setCharFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");




  function updateCharFilter(event: React.MouseEvent<HTMLImageElement>): void {
    const char = Array.from(event.currentTarget.classList)[1];
    if (charFilter.includes(char)) {
      setCharFilter((prevCharFilter) => prevCharFilter.replace(char + ", ", ""));
    } else {
      setCharFilter((prevCharFilter) => prevCharFilter + char + ", ");

    }

  }
  function updateTypeFilter(event: React.MouseEvent<HTMLButtonElement>): void {
    const type = event.currentTarget.innerText;
    setTypeFilter(type)

  }

  function clearTypeFilter(): void {
    setTypeFilter("")
  }

  function clearCharFilter(): void {
    setCharFilter("");
  }

  return (
    <>
      <div>

        <img onClick={updateCharFilter} src={terra} className="char Terra" alt="React logo" />
        <img onClick={updateCharFilter} src={ventus} className="char Ventus" alt="React logo" />
        <img onClick={updateCharFilter} src={aqua} className="char Aqua" alt="React logo" />
      </div>
      <button onClick={clearCharFilter}>Clear Character Filter</button>
      <button onClick={clearTypeFilter}>Clear Type Filter</button>

      <div>
        <button onClick={updateTypeFilter}>Actions</button>
        <button onClick={updateTypeFilter}>Attacks</button>
        <button onClick={updateTypeFilter}>Magic</button>
        <button onClick={updateTypeFilter}>Prizes</button>
        <button onClick={updateTypeFilter}>Shotlock</button>
        <button onClick={updateTypeFilter}>Stats</button>
        <button onClick={updateTypeFilter}>Support</button>

      </div>
      <h1>Melding BBS</h1>
      <div className="card">

        <p>
          Melding guide for Kingdom Hearts: Birth By Sleep Final Mix
        </p>
        <p>
          Current character filter: {charFilter}
        </p>
        <p>
          Type filter: {typeFilter}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



export default App
