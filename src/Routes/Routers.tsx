import MainDashboard from '@/components/Admin/MainDashboard';
import About from '@/pages/About';
import AdminDashboard from '@/pages/AdminDashboard';
import APIsPage from '@/pages/APIsPage';
import ContactPage from '@/pages/ContactPage';
import Docs from '@/pages/DocsPage';
import Landing from '@/pages/Landing';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';
import Secuall from '@/pages/Secaull/Secaull';
import Selwel from '@/pages/Selwel/Selwel';
import Services from '@/pages/Services';
import SusNet from '@/pages/SusNet/SusNet';
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
        <Route path="/selwell" element={<Selwel />} />
        <Route path="/susnet" element={<SusNet />} />
        <Route path="/secuall" element={<Secuall />} />
    </Routes>
};

export default Routers;