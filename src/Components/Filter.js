import React from 'react';
import Search from './Search'

import sale from '../assets/sale.png'
import calendar from '../assets/calendar.png'
import like from '../assets/like.png'

const filters = [
  {image: sale, name: 'Sale'},
  {image:calendar, name: 'Calendar'}, 
  {image:like, name: 'Wishlist'}
]

const Filter = () => {
  return ( 
    <div className="filter">
      <div className="filters">
        <i className="fa fa-lightbulb-o"></i>
        <span>Smart Filters</span>
      </div>
      <hr/>
      <div className="filter-items">
        {filters.map((data, key) => { 
          return (
            <div key={key} className="filter-item">
              <img src={data.image} alt={data.name}/>
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          )
        })
        }
      </div>
      <hr/>
      <div className="status">Status</div>
      <Search width="150px"/>
      <div>
        <input className="deliveredBtn" type="submit" value="Delivered"/>
      </div>
    </div>
   );
}
 
export default Filter;