import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from '../views/Home';
import Projects from '../views/MyProjects';
import AboutMe from '../views/AboutMe';
import Contacts from '../views/Contacts';
import Tecnologys from '../views/Tecnologys'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Projects" element={<Projects/>} />
      <Route path="AboutMe" element={<AboutMe/>} />
      <Route path="Contacts" element={<Contacts/>} />
      <Route path="Tecnologys" element={<Tecnologys/>} />
    </Routes>
    </>
  )
}

export default App
