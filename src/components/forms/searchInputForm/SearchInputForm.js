import React from "react";
import './searchinputform.styles.css'

const SearchInputForm = () => {
    return (
        <div className="search-input-form-container">
            <input type="text" className="search-input" placeholder="Explore Books Here...!"/>
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchInputForm;