import React, {useState, useEffect} from 'react';
import './SearchBar.css'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    const [placeholderText, setPlaceholderText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["River", "Cities", "Waterfall", "Beach", "Spots"];

    useEffect(() => {
        const currentWord = words[wordIndex];
        if (charIndex < currentWord.length) {
            const timer = setTimeout(() => {
                setPlaceholderText((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 250); // typing speed

            return () => clearTimeout(timer);
        } else if (charIndex < currentWord.length * 2) {
            const timer = setTimeout(() => {
                setPlaceholderText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev + 1);
            }, 250); // deleting speed

            return () => clearTimeout(timer);
        } else {
            setCharIndex(0);
            setWordIndex((prev) => (prev + 1) % words.length); // move to the next word or reset to the first word
        }
    }, [charIndex, wordIndex, words]);

    return (
        <div className='total'>
            <form id='search'>
                <input type="text" className="search-bar" placeholder={"Find " + placeholderText}/>
                <button className='search-btn' type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-search"/>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;

