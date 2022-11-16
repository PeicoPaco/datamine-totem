import './App.css';
import Home from './Views/Home/Home';
import Discover from './Views/Exploracion/Discover/Discover';
import VideoPlayer from './Views/VideoPlayer/VideoPlayer';
import StudioEM from './Views/Exploracion/StudioEM/StudioEM';
import Fusion from './Views/MapeoyData/Fusion/Fusion';
import StudioMapper from './Views/MapeoyData/StudioMapper/StudioMapper';
import StudioRM from './Views/Recursos/StudioRM';
import Sirovision from './Views/MapeoyData/Sirovision/Sirovision';
import { Route, Routes } from 'react-router-dom';


function App() {
  return <Routes>
    <Route path="/datamine-totem" element={<Home />} />
    <Route path="/discover" element={<Discover />} />  
    <Route path="/videoplayer/:id" element={<VideoPlayer />} /> 
    <Route path="/studioem" element={<StudioEM />} />
    <Route path='/fusion' element={<Fusion />} />
    <Route path='/studiomapper' element={<StudioMapper />} />
    <Route path='/studiorm' element={<StudioRM />} />
    <Route path='/sirovision' element={<Sirovision />} />
  </Routes>
}

export default App;
