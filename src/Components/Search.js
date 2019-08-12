import React from 'react';

const Search = ({width}) => {
  return ( 
    <div>
      <input className="searchBar" type="search" style={{width: width}} placeholder="&#xF002; Search"/>
    </div>
   );
}
 
export default Search;