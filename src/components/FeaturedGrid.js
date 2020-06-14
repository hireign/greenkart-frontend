import React from 'react';
import './FeaturedGrid.css';
import featuredimg1 from '../images/img3.jpg';
import featuredimg2 from '../images/img4.jpg';
import featuredimg3 from '../images/img5.jpg';
import featuredimg4 from '../images/img6.jpg';

function FeaturedGrid() {
    return <div class="row justify-content-center row-cols-1 row-cols-md-2 featuredGridDiv">
    <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg1} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Best Sellers</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{maxWidth: '400px'}}>
                <img src={featuredimg2} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Featured</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg3} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">New Arrival</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg4} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Gift Ideas</h3>
                </div>
        </div>
    </div>
</div>
}

export default FeaturedGrid;