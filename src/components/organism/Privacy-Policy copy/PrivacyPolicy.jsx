import React from "react";



const plans = [
    {
      name: "Basic",
      price: "₹999",
      per: "/month",
      description: "Perfect for individual agents",
      features: [
        "10 Property Listings",
        "Standard Listing Priority",
        "Email Support",
        { text: "Digital Marketing", disabled: true },
        { text: "Free Photoshoot", disabled: true },
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "₹2,499",
      per: "/month",
      description: "For growing real estate businesses",
      features: [
        "25 Property Listings",
        "Enhanced Listing Priority",
        "Phone & Email Support",
        "Basic Digital Marketing",
        { text: "Free Photoshoot", disabled: true },
      ],
      popular: false,
    },
    {
      name: "Assist",
      price: "₹4,999",
      per: "/month",
      description: "For established agencies",
      features: [
        "50 Property Listings",
        "Premium Listing Priority",
        "Dedicated Support Manager",
        "Advanced Digital Marketing",
        "1 Free Photoshoot/month",
      ],
      popular: true,
    },
    {
      name: "Assist Plus",
      price: "₹7,999",
      per: "/month",
      description: "For premium real estate firms",
      features: [
        "Unlimited Property Listings",
        "Top Listing Priority",
        "24/7 VIP Support",
        "Premium Digital Marketing",
        "3 Free Photoshoots/month",
      ],
      popular: false,
    },
  ];
  
  const SubscriptionPlans = () => {
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 mb-10">
            Select the perfect subscription plan that suits your real estate business needs and budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border ${
                  plan.popular ? "border-maroon-600" : "border-transparent"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-maroon-600 text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
                    Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-2xl font-bold mt-2">
                    {plan.price}
                    <span className="text-sm font-medium text-gray-600">{plan.per}</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-left">
                    {plan.features.map((feature, i) => {
                      const isDisabled = typeof feature === "object" && feature.disabled;
                      const text = typeof feature === "string" ? feature : feature.text;
                      return (
                        <li key={i} className={`flex items-center gap-2 ${isDisabled ? "text-gray-400 line-through" : ""}`}>
                          <span>{isDisabled ? "✕" : "✓"}</span> {text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button className="mt-6 bg-maroon-600 hover:bg-maroon-700 text-white font-semibold py-2 px-4 rounded-xl">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SubscriptionPlans;

const PrivacyPolicy = () => {
    return (
        <section className="w-full px-4 py-6 md:py-10 lg:py-16 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="text-sm md:text-base mb-4">
                At ZaminWale, we are committed to safeguarding your privacy. This
                Privacy Policy outlines how we collect, use, and protect your personal
                information when you use our website and services.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="text-sm md:text-base mb-4">
                We may collect personal information such as your name, email address,
                phone number, and location when you register on our site, fill out a
                form, or interact with our services.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="text-sm md:text-base mb-4">
                The data we collect is used to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base mb-4 space-y-1">
                <li>Provide personalized property recommendations</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant updates, newsletters, or offers</li>
                <li>Respond to inquiries and customer support requests</li>
            </ul>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
            <p className="text-sm md:text-base mb-4">
                We do not sell, trade, or rent your personal information to others. We
                may share data with trusted partners who assist us in operating the
                website and conducting business, under confidentiality agreements.
            </p>

            
            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">4. Electronic Communication</h2>
            <p className="text-sm md:text-base mb-4">
            When you visit www.zaminwale.com or voluntarily send e-mails to us,
             you are communicating with us electronically. We will keep record of this information so that we can respond to you periodically. 
             We only collect information from you when you register on our website or fill out a form.
              Also, when filling out a form on our website, you may be asked to enter your: Name, E-mail address or Phone / Mobile Number
              . You may, however visit our website anonymously. By communicating with us and submitting your personal information and contact details,
               you consent to receive communication from us through Email, SMS, Call, WhatsApp or any other communication medium, 
               even if your number has DND activated on it. You agree that all agreements, 
               notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
            <p className="text-sm md:text-base mb-4">
                Our website may use cookies to enhance user experience and analyze
                site traffic. You can choose to disable cookies through your browser
                settings.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
            <p className="text-sm md:text-base mb-4">
                We implement appropriate security measures to protect your data from
                unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">7. Your Consent</h2>
            <p className="text-sm md:text-base mb-4">
                By using our website, you consent to our privacy policy and agree to
                its terms.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
            <p className="text-sm md:text-base mb-4">
                ZaminWale reserves the right to update this privacy policy at any time.
                We encourage users to frequently check this page for any changes.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p className="text-sm md:text-base">
                If you have any questions regarding this privacy policy, feel free to
                contact us at <a href="mailto:support@zaminwale.com" className="text-blue-600 hover:underline">support@zaminwale.com</a>.
            </p>
        </section>
    );
};

export default PrivacyPolicy;
