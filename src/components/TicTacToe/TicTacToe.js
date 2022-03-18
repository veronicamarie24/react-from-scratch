import React, { useEffect, useState } from 'react';
import './TicTacToe.css';

const Square = ({ value, onClick }) => {
    return (
        <div className='square' onClick={onClick}>
            {value}
        </div>
    )
}

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    useEffect(() => {
        if (!squares.includes(null)) {
            calculateWinner();
        }
    }, [squares])

    function handleClickSquare(squareIndex) {
        squares[squareIndex] = isX ? 'X' : 'O';
        setSquares(squares);
        setIsX(!isX);
    }

    function calculateWinner() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    }

    return (
        <div>
            <div className='board'>
                <div className='row'>
                    <Square value={squares[0]} onClick={() => {handleClickSquare(0)}} />
                    <Square value={squares[1]} onClick={() => {handleClickSquare(1)}} />
                    <Square value={squares[2]} onClick={() => {handleClickSquare(2)}} />
                </div>
                <div className='row'>
                    <Square value={squares[3]} onClick={() => {handleClickSquare(3)}} />
                    <Square value={squares[4]} onClick={() => {handleClickSquare(4)}} />
                    <Square value={squares[5]} onClick={() => {handleClickSquare(5)}} />
                </div>
                <div className='row'>
                    <Square value={squares[6]} onClick={() => {handleClickSquare(6)}} />
                    <Square value={squares[7]} onClick={() => {handleClickSquare(7)}} />
                    <Square value={squares[8]} onClick={() => {handleClickSquare(8)}} />
                </div>
            </div>
            <p className='turn'>{isX ? 'X' : 'O'}'s Turn</p>
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