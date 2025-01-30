import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Find from './Pages/Find';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='shop' element={<Contact />} />
        <Route path='contact' element={<Shop />} />
        <Route path='find' element={<Find />} />
      </Routes>
    </>
  );
};

export default App;
