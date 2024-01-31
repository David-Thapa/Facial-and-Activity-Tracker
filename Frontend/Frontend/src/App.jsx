import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UploadPhoto from './pages/UploadPhoto';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/UploadPhoto" element={<UploadPhoto/>} />
            <Route path="/AboutPage" element={<AboutPage/>} />

            <Route path="/" element={<HomePage/>} />

    </Routes>
  </Router>
    </div>
  );
}

export default App;
