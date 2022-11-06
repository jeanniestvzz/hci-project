import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ScienceDropdown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Click to choose science elective">
      <Dropdown.Item href="#/action-1">Science Course 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Science Course 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Science Course 3</Dropdown.Item>
    </DropdownButton>
  );
}

export default ScienceDropdown;