import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search({handleSearchNote}){
    function handleSearchText(event){
        handleSearchNote(event.target.value);
    }
    return(
        <div className='search'>
            <MdSearch 
            className="search-icons"
            size="1.3em" />

            <input 
            onChange={handleSearchText}
            type='text' 
            placeholder='Type to search...' />
        </div>
    );
};

export default Search;