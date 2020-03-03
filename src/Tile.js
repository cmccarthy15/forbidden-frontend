import React, { useState } from 'react';
import styled from 'styled-components'
import { GiDigDug } from 'react-icons/gi';

function Tile(props) {
    const { id, row, column, img, name, under } = props;

    const [showFront, setShowFront] = useState(true)
    console.log(under)

    return (
        <FlipCard row={row} col={column}>
            <FlipCardInner under={under} onClick={(e) => props.updateTileState(e, id)}>
                <Shovel under={under} onClick={(e) => props.updateTileState(e, id, false)}><GiDigDug /></Shovel>
                <FlipCardBase><img className="tile-img back" src={'https://i.pinimg.com/originals/ee/af/93/eeaf935fa11a123af3ee9bea1906684b.jpg'} alt={name}/></FlipCardBase>
                <FlipCardBase><img className="tile-img front" src={img} alt={name}/></FlipCardBase>
            </FlipCardInner>

        </FlipCard>
    )
}

const FlipCard = styled.div`
    background-color: transparent;
    width: 150px;
    height: 150px;
    border: 1px solid red; 
    perspective: 1000px;
    grid-column-start: ${ props => props.col};
    grid-row-start: ${ props => props.row};
`

const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    transform: rotateY(${ props => props.under ? 180 : 0}deg);
`

const FlipCardBase = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    
    > .tile-img {
        height: 150px;
    }

    > .back {
        transform: rotateY(180deg);
    }
`

const Shovel = styled.span`
  position: relative;
  top: 0px;
  right: 0px;
  display: inline;
  float: right;
  background-color: white;
  padding: 2px;
  border-radius: 30%;
  opacity: 1;
  z-index: 2;
  visibility: ${props => props.under ? 'visible' : 'hidden'}
`

export default Tile;