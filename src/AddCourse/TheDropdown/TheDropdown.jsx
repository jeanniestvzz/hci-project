import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TheDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Click to choose theory elective">
     <table>
        <tr><Dropdown.Item href="#/action-1"><td>COT 4210</td><td>Automata Theory and Formal Languages</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-2"><td>COT 4521</td><td>Computational Geometry</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-3"><td>CIS 4212</td><td>Trustworthy Infrastructures </td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
     </table>
    </DropdownButton>
  );
}

export default TheDropdown;