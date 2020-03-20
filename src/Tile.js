import React from 'react';
import styled from 'styled-components'
import { GiDigDug } from 'react-icons/gi';
import { tileSize } from './constants';


function Tile(props) {
    const { id, row, column, img, name, status, max } = props;

    // console.log(status)

    return (
        <FlipCard row={row} col={column} status={status} max={max}>
            <FlipCardInner status={status} onClick={(e) => props.updateTileState(e, id)}>
                {!!status && <Shovel status={status} onClick={(e) => props.updateTileState(e, id, 2)}><GiDigDug /></Shovel>}
                <FlipCardBase max={max}><img className="tile-img back" src={'https://i.pinimg.com/originals/ee/af/93/eeaf935fa11a123af3ee9bea1906684b.jpg'} alt={name}/></FlipCardBase>
                <FlipCardBase max={max}><img className="tile-img front" src={img} alt={name}/></FlipCardBase>
            </FlipCardInner>

        </FlipCard>
    )
}

const FlipCard = styled.div`
    background-color: transparent;
    width: calc(calc(90vh - ${props => props.max * 10}px) / ${props => props.max});
    height: calc(calc(90vh - ${props => props.max * 10}px) / ${props => props.max});
    border: 1px solid red; 
    perspective: 1000px;
    grid-column-start: ${ props => !props.status ? -1 : props.col};
    grid-row-start: ${ props => !props.status ? -1 : props.row};
`

const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    transform: rotateY(${ props => props.status !== 2 ? 180 : 0}deg);
`

const FlipCardBase = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    
    > .tile-img {
        height: calc(calc(90vh - ${props => props.max * 10}px) / ${props => props.max});
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
  visibility: ${props => props.under !== 2 ? 'visible' : 'hidden'}
`

export default Tile;