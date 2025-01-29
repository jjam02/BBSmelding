import { useState } from 'react';
import terra from './assets/terra.png';
import ventus from './assets/ventus.png';
import aqua from './assets/aqua.png';
import actions from './assets/actions.json';
import attacks from './assets/attacks.json';
import magic from './assets/magic.json';
import prizes from './assets/prizes.json';
import shotlock from './assets/shotlock.json';
import stats from './assets/stats.json';
import support from './assets/support.json';
import MeldTable from './MeldTable';
import './App.css';

function App() {
  const [charFilter, setCharFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  const recipes = [
    { type: 'Actions', data: actions },
    { type: 'Attacks', data: attacks },
    { type: 'Magic', data: magic },
    { type: 'Prizes', data: prizes },
    { type: 'Shotlock', data: shotlock },
    { type: 'Stats', data: stats },
    { type: 'Support', data: support },
  ];

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
    setTypeFilter(type);
  }

  function clearTypeFilter(): void {
    setTypeFilter("");
  }

  function clearCharFilter(): void {
    setCharFilter("");
  }

  return (
    <>
      <div>
        <img onClick={updateCharFilter} src={terra} className="char Terra" alt="Terra" />
        <img onClick={updateCharFilter} src={ventus} className="char Ventus" alt="Ventus" />
        <img onClick={updateCharFilter} src={aqua} className="char Aqua" alt="Aqua" />
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

      <div className="card">
        <h1>Melding BBS</h1>
        <p>Melding guide for Kingdom Hearts: Birth By Sleep Final Mix</p>
        <p>Current character filter: {charFilter}</p>
        <p>Type filter: {typeFilter}</p>
      </div>
      <p className="read-the-docs">
        Click on Terra, Ventus, or Aqua to filter by character
      </p>
      <p className="read-the-docs">
        Click on the type of command to filter by type
      </p>

      {/* Render MeldTable for each recipe type */}
      {recipes.map((recipe) => (
        <MeldTable
          key={recipe.type}
          filterChar={charFilter}
          filterType={typeFilter}
          recipeType={recipe.type}
          data={recipe.data}
        />
      ))}
    </>
  );
}

export default App;