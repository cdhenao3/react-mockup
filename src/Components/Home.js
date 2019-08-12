import React from 'react';

import Items from './Items'
import Search from './Search'

const Home = () => {
  return ( 
    <React.Fragment>
      <div className="searchTop">
        <Search width="330px" />
      </div>
      <Items />
    </React.Fragment>
   );
}
 
export default Home;