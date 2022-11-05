import Flow from '../Flow';
import Header from '../Header';
import StudentInformation from '../StudentInformation';
import DegreeProgressBar from '../ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <StudentInformation />
      <DegreeProgressBar progress='32.5' />
      <Flow />
    </div>
  );
}

export default App;
