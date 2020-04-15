import React, { useState } from 'react';
import './search.scss';
const Search:React.FC = () => {
    return (
        <div className="search-box">
        <input  className="search" type="text" placeholder="搜索组件..." />
        <ul className="search-list">
        </ul>
        </div>
    )
}
export default Search;
