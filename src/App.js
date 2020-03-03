import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';
import { tiles as templates } from './tiles'
import Tile from './Tile';


function App() {
  const [tiles, setTiles] = useState(templates)

  const updateTileState = (e, id, under = true) => {
    e.stopPropagation()
    setTiles( prevTiles => prevTiles.map(tile => {
      if (tile.id === id){
        tile.under = under
      }
      return tile
    }))
  }


  return (
    <div className="App">
      <Container>
        {tiles.map(tile => {
          return (
           <Tile key={tile.id} {...tile} updateTileState={updateTileState} />
        )})}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(6, 150px);
  grid-auto-flow: row;
`


export default App;
