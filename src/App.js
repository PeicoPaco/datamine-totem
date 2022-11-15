import './App.css';
import Home from './Views/Home/Home';
import Discover from './Views/Exploracion/Discover/Discover';
import VideoPlayer from './Views/VideoPlayer/VideoPlayer';
import StudioEM from './Views/Exploracion/StudioEM/StudioEM';
import Fusion from './Views/MapeoyData/Fusion/Fusion';
import { Route, Routes } from 'react-router-dom';


function App() {
  return <Routes>
    <Route path="/datamine-totem" element={<Home />} />
    <Route path="/discover" element={<Discover />} />  
    <Route path="/discover/videoplayer/:id" element={<VideoPlayer />} /> 
    <Route path="/studioem" element={<StudioEM />} />
    <Route path='/fusion' element={<Fusion />} />
  </Routes>
}

export default App;
