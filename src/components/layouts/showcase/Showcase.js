import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
           <Navbar/>

            <div className="overlay"></div>
             <div className="showcase-content">
                <h1>Finest <span className="text-primary">Books</span> Available</h1>
                <p>Acquire quality books at cheaper price</p>

                <SearchInputForm/>
            </div> 
        </section>
    )
}

export default Showcase;