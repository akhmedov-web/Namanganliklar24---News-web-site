import React from 'react';

const Wrappers = () => {
    return (
        <div className='wrappers'>
            <div className="wrappers-navbar">
                <li> <i style={{ fontSize: "36px", color: "#F58A97" }} class="fas fa-virus"></i> Коронавирус COVID-19</li>
                <li> <i style={{ fontSize: "36px", color: "#E13D3E" }} class="fas fa-head-side-mask"></i> <span style={{ color: '#E13D3E' }}>Инфицированы</span> 2753</li>
                <li> <i style={{ fontSize: "36px", color: "#15CE3D" }} class="fas fa-smile"></i> <span style={{ color: "#15CE3D" }}>Выздоровели</span> 2245</li>
                <li> <i style={{ fontSize: "36px" }} class="fas fa-ban"></i>Умерли 12 </li>
            </div>
        </div>
    );
};

export default Wrappers;