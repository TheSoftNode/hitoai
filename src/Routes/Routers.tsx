import About from '@/pages/About';
import ContactPage from '@/pages/ContactPage';
import Docs from '@/pages/DocsPage';
import Landing from '@/pages/Landing';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';
import Services from '@/pages/Services';
import { Routes, Route } from 'react-router-dom';


const Routers = () =>
{
    return <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Docs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
};

export default Routers;