
import {Routes, Route} from "react-router-dom";
import Header from './Component/Header';
import Banner from './Home/Banner';
import Services from './Pages/Services';
import About from './Pages/About';
const App = () => {
  return (
    <>
      <Header/> 
    <Routes>
      <Route path="/" element={<Banner />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Service" element={<Services />}/>
    </Routes>
    {/* <Footer/>  */}

    </>

  )
}

export default App
