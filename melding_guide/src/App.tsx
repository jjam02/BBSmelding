import { useState } from 'react'
import terra from './assets/terra.png'
import ventus from './assets/ventus.png'
import aqua from './assets/aqua.png'
import './App.css'

function App() {



  return (
    <>
      <div>

        <img src={terra} className="char terra" alt="React logo" />
        <img src={ventus} className="char ventus" alt="React logo" />
        <img src={aqua} className="char aqua" alt="React logo" />
      </div>
      <h1>Melding BBS</h1>
      <div className="card">

        <p>
          Melding guide for Kingdom Hearts: Birth By Sleep Final Mix
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
