import React from 'react';
import './search-box.styles.css'
export const SearchBox = (props) => {
    return (<input value={props.inputValue} 
        className="search"
        onChange={props.handleChange} 
        type="search" 
        placeholder={props.placeholder}
        />
        );
}