import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Meme1 from './pages/Meme1';
import Meme2 from "./pages/Meme2";
import Meme3 from "./pages/Meme3";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Meme1' element={<Meme1 />} />
          <Route path='/Meme2' element={<Meme2 />} />
          <Route path='/Meme3' element={<Meme3 />} />
        </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
