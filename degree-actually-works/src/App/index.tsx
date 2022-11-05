import Flow from '../Flow';
import Header from '../Header';
import StudentInformation from '../StudentInformation';
import DegreeProgressBar from '../ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">React Flow - CRA Example</header>
      <Header />
      <StudentInformation />
      <DegreeProgressBar progress='32.5' />
      <Flow />
    </div>
  );
}

export default App;
