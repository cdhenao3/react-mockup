import React from 'react';

const Item = (props) => {
  const {item, changeValue, updateChecked} = props

  return ( 
    <div className="item-cmp">
      <div className="checkbox">
        <input type="checkbox" name="checked" checked={item.checked} onChange={updateChecked(item)}/>
      </div>
      <div className="item">
        <div className="date">
          <div>{item.date}</div>
        </div>
        <div className="place">
          <div className="location">
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
          </div>
          <div className="address">
            <div>{item.fromAddress}</div>
            <div>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
            <div>{item.toAddress}</div>
          </div>
          <div className="empty"></div>
        </div>
        <div className="item-spec">
          <div className="truck"></div>
          <div className="truck">
            <i className="fa fa-truck" aria-hidden="true"></i>
          </div>
          <div className="money">${item.price}</div>
          <div className="quantity">
            <input type="number" name="quantity" value={item.quantity} onChange={changeValue(item)}/>
          </div>
          <div className="burger">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Item;