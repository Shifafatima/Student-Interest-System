import { Route,Routes } from 'react-router-dom';
import './App.css';
import AddAStudent from './Pages/AddAStudent';
import ListOfStudents from './Pages/ListOfStudents';
import EditStudentPage from './Pages/EditStudentPage';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ViewDetails from './Pages/ViewDetails';

function App() {

  return (
    <>
    <Routes>
     <Route path="/" element={<Login />} />
      <Route path="/addStudent" element={<AddAStudent />} />
      <Route path="/studentlist" element={<ListOfStudents />} />
      <Route path="/editStudent" element={<EditStudentPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/viewStudent" element={<ViewDetails />} />


    </Routes>
    </>
  );
}

export default App;
