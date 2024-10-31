import './App.css';
import './Media.css'
import Logo from './images/nav-logo-2.webp'
import Machine from './components/home'
import WebDev from './components/header'
import AppDev from './components/appdev'
import Data from './components/Data'
import Offer from './components/offer'
import Home from './main/main'
import Login from './login/login'
// import About from './components/about'
import Ethical from './components/ehicalHacking'
import {BrowserRouter,Routes,NavLink,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <main>  
      <nav>
      <img src={Logo} alt=""/>
        <NavLink to='/' className="webDev">Home</NavLink>
        <NavLink to='ethic'className="Ethic">Ethical Hacking</NavLink>
        <NavLink to='machine' className="webDev">Machine-Learning</NavLink>
        <NavLink to='data' className="webDev">Data Scientist</NavLink>
        <NavLink to='app' className="appDev">App Development</NavLink>
        <NavLink to='web' className="webDev" id='web'>Web Development</NavLink>
        <NavLink to='offer' className="webDev" id='job'>Learn/Inten/Jobs</NavLink>
        <NavLink to='login' className="webDev" id='login'>Login</NavLink>
        
        {/* <input type="text" name="find" id="find" placeholder='Find your Carrer here...'/>
        <button id='but'>Search Carrer</button> */}
      </nav>
        <Routes>
          <Route path="web" element={<WebDev/>}/>
          <Route path="data" element={<Data/>}/>
          <Route path="app" element={<AppDev/>}/>
          <Route path="ethic" element={<Ethical/>}/>
          <Route path="machine" element={<Machine/>}/>
          <Route path="offer" element={<Offer/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </main>
    </BrowserRouter>
    {/* <About/> */}
    </>
  );
}

export default App;
