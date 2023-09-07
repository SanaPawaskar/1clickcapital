import React, { Component } from 'react'
import Productnames from './Product'
 class Downdrop extends Component {
    
      render() {

        return (
          <div className='form-div'>
            <select>
            {
                Productnames.map((item, i) => {
                    return (
                        <option key={i}>
                            {item.name}
                        </option>
                    )
                })
            }
            </select> 
              {/* <div className='input-container'>
              <Select options={this.state.selectOption} onChange={this.handleChange.bind(this)}/>
              <label>Products</label>
              </div> */}
          </div>         
        )
    }
}

export default Downdrop
