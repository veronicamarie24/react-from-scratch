import React, { useEffect, useState, useRef } from 'react';
import './ComboBox.css';
import arrow from './arrow-down.png';

const ComboBox = (props) => {
    const fruits = props.fruits;
    const [filteredFruits, setFilteredFruits] = useState(props.fruits);
    const [listOpen, setListOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(filter.toLowerCase()));
        setFilteredFruits(filteredFruits);
    }, [filter, fruits]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);

    function handleClickOutside(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setListOpen(false);
        }
    }

    function handleInputOnchange(input) {
        if (!listOpen) { setListOpen(true); }
        setFilter(input);
    }

    function handleClickDropdown() {
        setListOpen(!listOpen);
    }

    function handleItemClick(item) {
        setListOpen(false);
        // Filter out the emoji from the fruit
        const fruitSelected = item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        document.getElementById('fruit-input').value = fruitSelected;
    }

    return (
        <div className={`combo-box ${listOpen ? 'list-open' : 'list-closed'}`} ref={containerRef}>
            <form>
                <input 
                    type='text' 
                    id='fruit-input' 
                    name='fruit-input' 
                    placeholder='Choose a Fruit:'
                    onChange={((e) => handleInputOnchange(e.target.value))}
                />
                <button type='button' onClick={handleClickDropdown}>
                    <img src={arrow} />
                </button>
                {listOpen && <div className='fruit-dropdown-list'>
                    <ul id='fruits-list'>
                        {filteredFruits.map(
                            (fruit, id) => 
                                <li key={id} className='fruit-list-item' onClick={((e) => handleItemClick(e.target.innerText))}>
                                    <span role='img'>{fruit}</span>
                                </li>
                        )}
                    </ul>
                </div>}
            </form>
        </div>
    );
}

export default ComboBox;