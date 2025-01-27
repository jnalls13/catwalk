import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
      <form>
        <label className='overview-addcart-dropdown overview-addcart-btn'>
          {this.props.name === 'size' ? 'Select Size' : 'Select Quantity'}

          <select>

            {Array.isArray(this.props.style) ? <></> :
            Object.values(this.props.style.skus).map((item, index) => {
              return (
                <option>{item[this.props.name]}</option>
              )
            })
            }


          </select>
        </label>
      </form>
    )
  }
}

export default Dropdown;

// html select element