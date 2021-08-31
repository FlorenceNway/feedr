import React, { useState, useEffect, useContext } from 'react';
import itemApi from '../../Api/item.api';
import { QtyContext } from '../context/QtyContext';

const Header = () => {
    const { qty, prevItems } = useContext(QtyContext);

    const dietaries = ["gf", "df", "v", "ve", "n!", "rsf"]

    const dietary = (type) => {
        let count = 0;
        prevItems?.forEach(item => item.dietaries.forEach(dietary => {
            if (dietary === type) count++;
        }))
        return count;
    }
    
    return (
        <div>
         <div className="menu-summary">
            <div className="container">
                <div className="row">
                <div className="col-6 menu-summary-left">
                    <span>{qty} items</span>
                </div>
                <div className="col-6 menu-summary-right">
                    {
                        dietaries.map(type => {
                            let count = dietary(type);
                           return count == 0 ? '' : <>{count}x <span className="dietary">{type}</span></>
                        })
                    }
                </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Header;