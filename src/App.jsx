import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Find from './Pages/Find';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='shop' element={<Shop />} />
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='find' element={<Find />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
