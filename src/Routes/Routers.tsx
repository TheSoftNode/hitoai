import MainDashboard from '@/components/Admin/MainDashboard';
import About from '@/pages/About';
import AdminDashboard from '@/pages/AdminDashboard';
import APIsPage from '@/pages/APIsPage';
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin2" element={<MainDashboard />} />
        <Route path="/apis" element={<APIsPage />} />
    </Routes>
};

export default Routers;