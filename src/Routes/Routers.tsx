import MainDashboard from '@/components/Admin/MainDashboard';
import TwoTwentyThreeD from '@/pages/223D/TwoTwentyThreeD';
import About from '@/pages/About';
import AdminDashboard from '@/pages/AdminDashboard';
import AI4Physio from '@/pages/AI4Physio/AI4Physio';
import APIsPage from '@/pages/APIsPage';
import ContactPage from '@/pages/ContactPage';
import Docs from '@/pages/DocsPage';
import Knomed from '@/pages/KNOMED/Knomed';
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
        <Route path="/ai4physio" element={<AI4Physio />} />
        <Route path="/knomed" element={<Knomed />} />
        <Route path="/knomed" element={<Knomed />} />
        <Route path="/223d" element={<TwoTwentyThreeD />} />

    </Routes>
};

export default Routers;