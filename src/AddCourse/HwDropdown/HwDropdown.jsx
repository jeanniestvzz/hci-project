import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HwDropdown() {
  
  return (
    <DropdownButton id="dropdown-basic-button" title="Click to choose hardware elective">
      <form>
        <label>
      <table>
 
        <tr><Dropdown.Item href="#/action-1"><td>CDA 4203</td><td>Computer System Design</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-2"><td>CDA 4213</td><td>CMOS-VLSI Design</td><td>3 hrs</td><td>Closed Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-3"><td>CDA 4321</td><td>Cryptographic Hardware and Embedded Systems</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
      </table>
      </label>
      </form>

    </DropdownButton>
  );
} 

export default HwDropdown

// class HwDropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }