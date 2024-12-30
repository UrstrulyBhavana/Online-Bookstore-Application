import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import BooksPage from "./Pages/bookspage/BooksPage";
import BookDetailsPage from "./Pages/bookdetailspage/BookDetails";

const App = () => {
    return(
        <div>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/books" element={<BooksPage/>} />
               <Route path="/book-details/:id" element={ <BookDetailsPage/>} />
            </Routes>
        </div>
    )
}

export default App;