import Footer from "../components/Footer/Footer";
import FloatingChat from "../components/Dangling/FloatingChat";
import Navbar from "../components/Header/Navbar";
import Routers from "../Routes/Routers";
import { Toaster } from "@/components/ui/toaster";


const Layout = () =>
{
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Routers />
      </main>
      <Footer />
      <FloatingChat />
      <Toaster 
       
      />
    </>
  );
};

export default Layout;