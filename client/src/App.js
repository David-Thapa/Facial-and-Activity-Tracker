import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UploadPhoto from './pages/UploadPhoto';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/AboutPage' element={<AboutPage />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/UploadPhoto' element={<UploadPhoto />}/>
      </Routes>
    </div>
  );
}

export default App;
