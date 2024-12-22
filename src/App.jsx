import Console from "./components/Console";
import HomePage from "./components/HomePage"
//Using Router for navigation function
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./components/Members";
import mentordata from "./components/MentorsData"
import SquadMatesdata from "./components/SquadMates"
import Memories from "./components/Memories";
import MemoryData from './components/MemoriesData';
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/console" element={<Console/>}/>
        <Route path="/members" element={<Members mentordata={mentordata}  SquadMatesdata={SquadMatesdata} />}/>
        <Route path='/memories' element={<Memories MemoryData={MemoryData}/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </Router>
  )
}

export default App
