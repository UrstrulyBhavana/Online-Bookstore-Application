import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import ProductListing from "../../components/layouts/productlisting/ProductListing";

const HomePage = () => {
    return (
       <section>
          <Showcase/>
          <ProductListing />
       </section>
    )
}

export default HomePage;