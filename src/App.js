import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>



function App() {
  return (
    <div className="App" >
      < NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city-breaks' element={<CityBreaks />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/destinations' element={<Destinations />} />
      
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
