import React from 'react';

const SearchInput = ({setSearchItem}) => {
    return (
        <div className="filters">
            <input className="form-control" placeholder="Search Name..." onChange={(e) => setSearchItem(e.target.value)}/>
        </div>
    );
};

export default SearchInput;