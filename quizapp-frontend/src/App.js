import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Landpage from './Components/Pages/Landpage';
import Aboutus from './Components/Pages/Aboutus';
import Changepass from './Components/Pages/Changepass';
import Congr from './Components/Pages/Congr';
// import DrawerComp from './Components/Pages/Drawer';
import Question from './Components/Pages/Question';
// import Footer from './Components/Pages/Footer';
import Headers from './Components/Pages/Headers';
import Footer from './Footer';
import Contactus from './Components/Pages/Contactus';
import Accountinfo from './Components/Pages/Accountinfor';
import Congr2 from './Components/Pages/Congr2';
import Congr1 from './Components/Pages/Congr1';
// import Login, { Newpass } from './Components/Pages/Newpass';
import Forgetpass from './Components/Pages/Forgetpass';
import Newpass from './Components/Pages/Newpass';
import Questionpg1 from './Components/Pages/Questionpg1';
import Questionpg2 from './Components/Pages/Questionpg2';
import Questionpg3 from './Components/Pages/Questionpg3';
import Questionpg4 from './Components/Pages/Questionpg4';
import Questionpg5 from './Components/Pages/Questionpg5';
import Logout from './Components/Pages/Logout';
import LogoutSuccessful from './Components/Pages/Logoutsuccess';
import QuizStart from './Components/Pages/QuizStart';
import Signin from './Components/Pages/Signin';
import Signup from './Components/Pages/Signup';
import Verification from './Components/Pages/Verification';
import Trackprogress from './Components/Pages/Trackprogress';
import Questionlevel from './Components/Pages/Questionlevel';
import Contactsub from './Components/Pages/Contactsub';





function App() {

  return (
   <BrowserRouter>
    
   <Routes>
   <Route path="/" element={<Landpage />} />
   <Route path="/aboutus" element={<Aboutus />} />
   <Route path="/Changepass" element={<Changepass />} />
   <Route path="/Congr" element={<Congr />} />
   <Route path="/Forgetpass" element={<Forgetpass />} />
   {/* <Route path="/Drawercomp" element={<DrawerComp/>} /> */}
   <Route path='/Headers' element={<Headers/>}/>
   <Route path="/Question" element={<Question/>} />
    <Route path="/Footer" element={<Footer/>} />
    <Route path="/Contactus" element={<Contactus/>} />
    <Route path="/Accountinfo" element={<Accountinfo/>} />
    <Route path="/Congr2" element={<Congr2/>} />
    <Route path="/Congr1" element={<Congr1/>} />
    <Route path="/Newpass" element={<Newpass/>} />
    <Route path="/Logout" element={<Logout/>} />
    <Route path="/Questionpg1" element={<Questionpg1/>} />
    <Route path="/LogoutSuccessful" element={<LogoutSuccessful/>} />
    <Route path="/QuizzStart" element={<QuizStart/>} />
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Verification" element={<Verification/>} />
    <Route path="/Trackprogress" element={<Trackprogress/>} />
    <Route path="/Questionpg2" element={<Questionpg2/>} />
    <Route path="/Questionpg3" element={<Questionpg3/>} />
    <Route path="/Questionpg4" element={<Questionpg4/>} />
    <Route path="/Questionpg5" element={<Questionpg5/>} />
    <Route path='/Questionlevel' element={<Questionlevel/>}/>
    <Route path='/Contactsub' element={<Contactsub/>}/>
    <Route path='/QuizStart' element={<QuizStart/>}/>
    <Route path='/Accountinfo' element={<Accountinfo/>}/>
   
  
    
   </Routes>
 
   </BrowserRouter>
  );
}

export default App;
