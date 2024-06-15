import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Services from './Pages/Courses';

import About from './Pages/About';
import UserDashboard from './Pages/user-routes/UserDashboard';
import Privateroute from './components/Privateroute';

import Courses from './Pages/Courses';

import UserProvider from './context/UserProvider';
import RegCandidate from './Pages/user-routes/RegCandidate';
import UpdateStudent from './Pages/user-routes/UpdateStudent';
import UpdateUserName from './Pages/user-routes/UpdateUserName';
import UpdatePassword from './Pages/user-routes/UpdatePassword';
import UpdateCourse from './Pages/UpdateCourse';
import AddCourse from './Pages/AddCourse';
import AdminDashboard from './Pages/user-routes/AdminDashboard';
import ContactUs from './Pages/ContactUs';
import Features from './Pages/Features';
import Feedback from './Pages/Feedback';



function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />



          <Route path='/user' element={<Privateroute />}>
            <Route path='dashboard/:id' element={<UserDashboard />} />
            <Route path='admindashboard/:id' element={<AdminDashboard />} />
            <Route path='regcandidate' element={<RegCandidate />} />
            <Route path='courses' element={<Courses />} />
            <Route path='updatestudent/:id' element={<UpdateStudent />} />
            <Route path='updateusername/:id' element={<UpdateUserName />} />
            <Route path='updatepassword/:id' element={<UpdatePassword />} />
            <Route path='updatecourse/:id' element={<UpdateCourse />} />
            <Route path='addcourse' element={<AddCourse />} />
            <Route path='features' element={<Features />} />
            <Route path='feedback' element={<Feedback />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
