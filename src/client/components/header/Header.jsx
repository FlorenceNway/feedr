import React, { useState, useEffect, useContext } from 'react';
import itemApi from '../../Api/item.api';
import { QtyContext } from '../context/QtyContext';

const Header = () => {
    const { qty } = useContext(QtyContext)
    
    return (
        <div>
         <div className="menu-summary">
            <div className="container">
                <div className="row">
                <div className="col-6 menu-summary-left">
                    <span>{qty} items</span>
                </div>
                <div className="col-6 menu-summary-right">
                    6x <span className="dietary">ve</span>
                    4x <span className="dietary">v</span>
                    12x <span className="dietary">n!</span>
                </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Header;