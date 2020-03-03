import React, { useState } from 'react';
import './App.css';
import { tiles as templates } from './tiles'
import styled from 'styled-components'
import { GiDigDug } from 'react-icons/gi';


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
          const { id, row, column, img, name, under } = tile
          return (
            <Tile key={id} row={row} col={column} under={under} onClick={(e) => updateTileState(e, id)}>
              <Shovel onClick={(e) => updateTileState(e, id, false)}><GiDigDug /></Shovel>
              <img className="tile-img" src={img} alt={name}/>
            </Tile>
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

const Tile = styled.div`
  grid-column-start: ${ props => props.col};
  grid-row-start: ${ props => props.row};
  height: 150px;

  > .tile-img {
    height: 150px;
    opacity: ${props => props.under ? 0.2 : 1.0 }
  }
`

const Shovel = styled.span`
  margin-right: 5px;
  position: relative;
  top: 33px;
  display: inline;
  float: right;
  background-color: white;
  padding: 2px;
  border-radius: 30%;
  opacity: 1;
  z-index: 2;
`

export default App;
