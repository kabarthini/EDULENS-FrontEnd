import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Project.js/Home';
import ButtonAppBar from './Project.js/NavBarDemo';
import About from './Project.js/About';
/*import Login from './Project.js/Login';
import Contactus from './Project.js/Contactus';
import Clickcounter from './HOC/Clickcounter';
import Counterhover from './HOC/Counterhover';
import HocksEx from './component.js/HocksEx'; */
import Loginform from './Form/Loginform';




function App() {
  return (
    <div className="App">
    <ButtonAppBar/>
    <Loginform/>
    <BrowserRouter>
      <Routes>
      <Route path="/nave" element={<ButtonAppBar/>}/>
      <Route path="/form" element={<Loginform/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       </Routes>
       </BrowserRouter>
       </div> 
      
      );
    }
    
    export default App;
    
    /* <Route path="/login" element={<Login/>}/>
  <Route path="/contactus" element={<Contactus/>}/>
  <Clickcounter/>
  <Counterhover/>
  <HocksEx/> */
