import './App.css';
import Home from './Views/Home/Home';
import Discover from './Views/Exploracion/Discover/Discover';
import VideoPlayer from './Views/VideoPlayer/VideoPlayer';
import StudioEM from './Views/Exploracion/StudioEM/StudioEM';
import { Route, Routes } from 'react-router-dom';


function App() {
  return <Routes>
    <Route path="/datamine-totem" element={<Home />} />
    <Route path="/discover" element={<Discover />} />  
    <Route path="/discover/videoplayer/:id" element={<VideoPlayer />} /> 
    <Route path="/studioem" element={<StudioEM />} />
  </Routes>
}

export default App;
