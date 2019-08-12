import React, {Component} from 'react';
import Item from './Item'

class Items extends Component {
  state = {
    items : [
      {
        date: 'Monday 10th 2:28 PM',
        fromAddress: 'Houston, TX, 20392',
        toAddress: 'Los Angeles, CA, 12345',
        basePrice: 250,
        price: 250,
        quantity: 1,
        checked: true
      },
      {
        date: 'Tuesday 11th 5:50 PM',
        fromAddress: 'Los Angeles, CA, 12345',
        toAddress: 'Houston, TX, 20392',
        basePrice: 300,
        price: 600,
        quantity: 2,
        checked: false
      },
      {
        date: 'Friday 14th 1:10 AM',
        fromAddress: 'Miami, FL, 428281',
        toAddress: 'Houston, TX, 20392',
        basePrice: 450,
        price: 450,
        quantity: 1,
        checked: false
      }
    ],
    checkAll: false
  }

  render(){
    const {items, checkAll} = this.state

    return ( 
      <React.Fragment>
        <div className="check">
          <div className="checkbox checkAll">
            <input type="checkbox" checked={checkAll} onChange={this.checkAll}/>
          </div>
          <div className="grow-nth"></div>
        </div>
        <div className="items">
          {
            items.map((item, key)=>{
              return <Item item={item} key={key} changeValue={this.updateValue} updateChecked={this.updateChecked}/>
            })
          }
        </div>
      </React.Fragment>
    );
  }

  updateValue = param => e => {
    const items = [...this.state.items]
    const index = items.indexOf(param)
    const currentValue = items[index];

    if(e.target.value < 0) e.target.value = 0
    currentValue[e.target.name] = e.target.value
    currentValue.price = parseInt(e.target.value) * param.basePrice

    this.setState({items})
  }

  updateChecked = param => e => {
    const items = [...this.state.items]
    const index = items.indexOf(param)
    const currentValue = items[index];

    currentValue[e.target.name] = !param.checked

    let checkArray = items.map(item => {
        return item.checked
        
    })

    let checkAll = true
    if(checkArray.includes(false)) checkAll = false

    this.setState({items, checkAll: checkAll})
  }

  checkAll = () =>{
    const items = [...this.state.items]
    items.map(item => {
      item.checked = !this.state.checkAll
      return items
    })

    this.setState({items, checkAll: !this.state.checkAll})
  }
}
 
export default Items;