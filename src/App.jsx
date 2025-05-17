// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav1 from './Component/Navebar/nav.jsx'
import NavMain from './Component/Navebar/mainnav.jsx'
import Footer from './Component/Footer/footer.jsx'
import Help from './pages/Help/help.jsx'
import Rerun from './pages/Rerun/rerun.jsx'
import Women from './pages/women/women.jsx'
import Men from './pages/Men/men.jsx'
import Home from './pages/Home/Home.jsx'
import Socks from './pages/Socks/socks.jsx'
import Arrival from './pages/Newarrivals/arrival.jsx'
import Stores from './pages/Stores/store.jsx'
import Women_Arrival from './pages/Newarrivals/women_arrival.jsx'
import Men_Arrival from './pages/Newarrivals/men_arrival.jsx'
import Susbainlity from './pages/Sustainability/sustainability.jsx'
import Privacy from './pages/Privacy/privacy.jsx'
import Treams from './pages/Treams/tream.jsx'
import Menshoes from './pages/MenShoes/MenShoesMain.jsx'



function App() {
  return (
    <>
    <Router>
    <Nav1/>  
    <NavMain/>
    

      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Rerun' element={<Rerun/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Socks' element={<Socks/>}/>
        <Route path='/Arrival' element={<Arrival/>}/>
         <Route path='/Stores' element={<Stores/>}/>
         <Route path='/Women_Arrival' element={<Women_Arrival/>}/>
         <Route path='/Men_Arrival' element={<Men_Arrival/>}/>
        <Route path='/Susbainlity' element={<Susbainlity/>}/>
         <Route path='/Menshoes' element={<Menshoes/>}/>
         <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Treams' element={<Treams/>}/>

      
      
      
        
      </Routes>
    <Footer/>
 

    </Router>
    
    </>
  )
}

export default App