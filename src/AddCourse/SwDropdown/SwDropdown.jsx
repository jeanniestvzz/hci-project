import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SwDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Click to choose software elective">
     <table>
        <tr><Dropdown.Item href="#/action-1"><td>CEN 4072</td><td>Software Testing</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-2"><td>CIS 4345</td><td>Big Data Storage Analysis with Hadoop</td><td>3 hrs</td><td>TBD Spring 23</td></Dropdown.Item></tr>
        <tr><Dropdown.Item href="#/action-3"><td>COP 4620</td><td>Compilers</td><td>3 hrs</td><td>Open Spring 23</td></Dropdown.Item></tr>
      </table>
    </DropdownButton>
  );
}

export default SwDropdown;