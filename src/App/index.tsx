import Flow from '../Flow';
import Header from '../Header';
import StudentInformation from '../StudentInformation';
import DegreeProgressBar from '../ProgressBar';
import AddScienceElective from '../AddCourse/AddScienceElective';
import AddCSEElective from '../AddCourse/AddCSEElective';
import PastCourseInfo from '../CourseInfo/PastCourseInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FutureCourseInfo from '../CourseInfo/FutureCourseInfo';


function App() {
  return (
    <div className="App">
      <Header />
      <StudentInformation />
      <DegreeProgressBar progress='32.5' />
      <Flow />
      <AddScienceElective />
      <AddCSEElective />
      <FutureCourseInfo />
      <PastCourseInfo />
    </div>
  );
}

export default App;
