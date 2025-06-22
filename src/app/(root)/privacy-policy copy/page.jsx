import React from "react";
import Footer from "@/components/organism/Footer";
import WhyChooseZaminWale from "@/components/organism/Privacy-Policy copy/WhyChooseZaminWale";
import SubscriptionPlans from "@/components/organism/Privacy-Policy copy/SubscriptionPlans";
import ClientTestimonials from "@/components/organism/Privacy-Policy copy/ClientTestimonials";

const Page = () => {
  return (
    <div className="bg-[#fdf6f6] min-h-screen text-[#3b0a0a] font-sans">
      

      <section className="py-10">
        <WhyChooseZaminWale />
      </section>

      <section className="py-10 bg-white shadow-inner">
        <SubscriptionPlans />
      </section>

      <section className="py-10">
        <ClientTestimonials />
      </section>

      {/* Optional: Add FAQ section here */}
      {/* <section className="py-10 bg-white">
        <FAQ />
      </section> */}

      <footer className="bg-[#800000] text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;