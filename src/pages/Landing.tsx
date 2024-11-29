import WhyChooseUs from "../components/Landing/WhyChooseUs";
import HeroSection from "../components/Landing/Home";
import Partners from "@/components/Landing/Partners";
import Product from "@/components/Landing/Product";
import CTASection from "@/components/Landing/CTASection";
import APISection from "@/components/Landing/APISection";

const Landing = () =>
{
    return (
        <div>
            <HeroSection />
            <WhyChooseUs />
            <APISection />
            <Product />
            <Partners />
            {/* <ContactNewsletter /> */}
            <CTASection />
        </div>
    )
}

export default Landing