import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage'
import OurServicesPage from '../OurServicesPage/OurServicesPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <p>Contact us for a free quote today! We speak Spanish&darr;</p>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/services" element={<OurServicesPage />} />
      </Routes>
    </main>
  );
}
