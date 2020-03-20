import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { tiles as templates, variantList } from './tiles'
import Tile from './Tile'
import { tileSize } from './constants'

const App = props => {
  const [tiles, setTiles] = useState(templates)
  const [boards] = useState(variantList)
  const [board, setBoard] = useState(0)

  useEffect(() => {
    console.log('oh boy oh boy', board)
    if(board){
      fetch(`http://localhost:3000/api/v1/boards/${board}`)
      .then(res => res.json())
      .then(board => {
        console.log('got board', board)
        setTiles(board.tiles)
        props.history.push(`/boards/${board.id}`)
      })
    }
  }, [board])

  const updateTileState = (e, id, status) => {
    e.stopPropagation()
    setTiles( prevTiles => prevTiles.map(tile => {
      
      if (tile.id === id){
        tile.status = status && tile.status
          ? status 
          : tile.status > 0 
            ? tile.status - 1 
            : 0 
      }
      return tile
    }))
  }

  const renderContainer = () => {
    // debugger;
    // if(board) {debugger; console.log('max val', Math.max(boards[board - 1].rows))}
    return (
      board && <Container max={9}>
        {tiles.map(tile => {
          return (
          <Tile key={tile.id} {...tile} max={9} updateTileState={updateTileState} />
        )})}
      </Container>
    )
  }

  const handleBoardSelect = e => {
    setBoard(e.target.value)
    // should be after fetch
  }

  const renderVariantList = () => {
    return (
      <select value={board} onChange={handleBoardSelect}>
        <option value={0}>Please Select a Variant</option>
        {boards.map(board => <option key={board.id} value={board.id}>{board.name}</option>)}
      </select>
    )
  }
  return (
    <div className="App">
      <Nav>Welcome to Forbidden Island!</Nav>
      <Switch>
        <Route path="/start" render={() => <div>Choose your variant {renderVariantList()} </div>} />
        <Route path="/boards/:id" render={() => renderContainer()} />
        <Route path="/" render={() => <img src="https://lh3.googleusercontent.com/p/AF1QipObnV0hdDKYlbvnc4noAkxb0kHRW5QQWvQgLiU1=w660-h440-c"/>} />
      </Switch>
      
      
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(${props => props.max}, calc(calc(90vh - ${props => props.max * 10}px) / ${props => props.max}));
  grid-template-rows: repeat(${props => props.max}, calc(calc(90vh - ${props => props.max * 10}px) / ${props => props.max}));
  grid-auto-flow: row;
`

const Nav = styled.div`
  width: 100vw;
  font-size: 2em;
  border-bottom: double;
  height: 5vh;
  line-height: 5vh;
  margin-bottom: 1vh;

`


export default App;
