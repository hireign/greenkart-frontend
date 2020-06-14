import React, { Component } from 'react';
import FeaturedGrid from '../components/FeaturedGrid';
import ProductListing from '../components/ProductListing';
import './HomePage.css'

class HomePage extends Component{
   
    render(){
        return(
            <>
            <div className="root">
                <div className="featuredGrid">
                    <FeaturedGrid/>
                </div>
                <div className="productTitle">
                    <h2>Now Trending</h2>
                </div>
                <div className="productListing">
                    <ProductListing/>
                </div>
            </div>
            </>
        );
    }
}

export default HomePage;