
import {Routes, Route} from "react-router-dom";
import Header from './Component/Header';
import Banner from './Home/Banner';
const App = () => {
  return (
    <>
      <Header/> 
    <Routes>
      <Route path="/" element={<Banner />}/>
    </Routes>
    {/* <Footer/>  */}

    </>

  )
}

export default App
