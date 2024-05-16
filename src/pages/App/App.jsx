import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage'
import OurServicesPage from '../OurServicesPage/OurServicesPage'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LanguageSelector from '../../components/LanguageSelector/language-selector'
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import OurWorkPage from '../OurWorkPage/OurWorkPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const { t } = useTranslation()

  return (
    <div className="App">
      <div className="main-content">
        <div className="content-container">
          <LanguageSelector />
          <p>{t("contactQuote")}&darr;</p>
        </div>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />}/>
          <Route path="/our-work" element={<OurWorkPage />}/>
        </Routes>
      </div>
      <footer><Footer /></footer>
    </div>
  );
}
