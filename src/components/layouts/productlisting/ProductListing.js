import React from "react";
import './productListing.styles.css';
import ProductImage from '../../../assets/books-images/jungle-book.jpeg';

const ProductListing = () => {
    return(
        <div className="product-listing-container">
             <div className="container">
               <h2>Here are some <span className="text-primary">books</span> that capture the essence of your <span className="text-primary">favourites</span>!!</h2>
                
                <div className="listing-container">
                     <div className="product-listing-card">
                        <div className="product-listing-img-container">
                            <img src={ProductImage} alt="product-listing-image" className="product-listing-image"/>
                        </div>
                        <div className="product-listing-details-container">
                            <h3>The Jungle Book</h3>
                            <p className="author-name">Rudyard Kipling</p>
                            <p className="pricing">&#8377; 300</p>
                            <a href="#" className="product-listing-button">Button</a>
                        </div>

                     </div>
                </div>
             </div>
        </div>
    )
}


export default ProductListing;