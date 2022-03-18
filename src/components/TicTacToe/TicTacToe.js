import React from 'react';
import './TicTacToe.css';

const Square = ({ value }) => {
    return (
        <div className='square'>
            {value}
        </div>
    )
}

const Board = () => {
    return (
        <div className='board'>
            <div className='row'>
                <Square value={'X'} />
                <Square value={'X'} />
                <Square value={'X'} />
            </div>
            <div className='row'>
                <Square value={'X'} />
                <Square value={'X'} />
                <Square value={'X'} />
            </div>
            <div className='row'>
                <Square value={'X'} />
                <Square value={'X'} />
                <Square value={'X'} />
            </div>
        </div>
    )
}

const TicTacToe = () => {
    return (
        <div className='tictactoe'>
            <Board />
        </div>
    )
}

export default TicTacToe;