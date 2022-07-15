import { Route, Routes } from "react-router-dom"

import HeaderScreen from "./components/Shared/HeaderScreen"
import HomeScreen from "./components/Home/HomeScreen"
import SkillsScreen from "./components/Skills/SkillsScreen"
import PortfolioScreen from "./components/Portfolio/PortfolioScreen"
import ContactScreen from "./components/Contact/ContactScreen"
import FooterScreen from "./components/Shared/FooterScreen"

function App() {

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/project' element={<SkillsScreen />} />
          <Route path="/team" element={<PortfolioScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App