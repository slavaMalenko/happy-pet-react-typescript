import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import AboutUs from './components/pages/AboutUs';
import BaseHome from './components/pages/BaseHome';
import Contacts from './components/pages/Contacts';
import Friends from './components/pages/Friends';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<BaseHome />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/service" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App;
